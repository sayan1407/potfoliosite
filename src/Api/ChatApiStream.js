const API_BASE_URL = "https://portfolio-agent-api.vercel.app";

const emitTextChunk = async (text, onChunk) => {
  if (!text) return;

  const normalized = text.replace(/\r/g, "");

  if (normalized.length <= 1) {
    onChunk?.(normalized);
    return;
  }

  for (const char of normalized) {
    onChunk?.(char);
    await new Promise((resolve) => setTimeout(resolve, 15));
  }
};

const parseStreamChunk = async (chunk, onChunk) => {
  const lines = chunk.split(/\r?\n/);

  for (const line of lines) {
    const trimmed = line.trim();
    if (!trimmed) continue;

    if (trimmed.startsWith("data:")) {
      const payload = trimmed.replace(/^data:\s*/, "").trim();
      if (!payload || payload === "[DONE]") continue;

      try {
        const parsed = JSON.parse(payload);
        const text = parsed.reply || parsed.content || parsed.message || "";
        await emitTextChunk(text, onChunk);
      } catch (error) {
        await emitTextChunk(payload, onChunk);
      }
      continue;
    }

    await emitTextChunk(trimmed, onChunk);
  }
};

export const streamChat = async ({
  message,
  history = [],
  onChunk,
  onDone,
  onError,
}) => {
  try {
    const response = await fetch(`${API_BASE_URL}/chat/stream`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        message,
        history,
      }),
    });

    if (!response.ok) {
      throw new Error(`Streaming request failed: ${response.status} ${response.statusText}`);
    }

    if (!response.body) {
      throw new Error("Streaming response body is missing.");
    }

    const reader = response.body.getReader();
    const decoder = new TextDecoder();
    let fullText = "";

    while (true) {
      const { value, done } = await reader.read();
      if (done) break;

      const chunk = decoder.decode(value, { stream: true });
      fullText += chunk;
      await parseStreamChunk(chunk, onChunk);
    }

    if (onDone) {
      onDone(fullText);
    }

    return fullText;
  } catch (error) {
    if (onError) {
      onError(error);
    }
    throw error;
  }
};
