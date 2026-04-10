import React, { useState, useRef, useEffect } from 'react';
import { useChatMutation } from '../Api/ChatApi';

const FloatingChat = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [message, setMessage] = useState("");
    const [chat, { isLoading }] = useChatMutation();
    const [history, setHistory] = useState([]);
    const messagesEndRef = useRef(null);

    // Resize state
    const [windowSize, setWindowSize] = useState({ width: 320, height: 450 });
    const isResizing = useRef(false);
    const startPos = useRef({ x: 0, y: 0 });
    const startSize = useRef({ width: 320, height: 450 });

    const handleMouseDown = (e) => {
        isResizing.current = true;
        startPos.current = { x: e.clientX, y: e.clientY };
        startSize.current = { ...windowSize };
        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseup', handleMouseUp);
    };

    const handleMouseMove = (e) => {
        if (!isResizing.current) return;
        const dx = startPos.current.x - e.clientX;
        const dy = startPos.current.y - e.clientY;

        setWindowSize({
            width: Math.max(250, startSize.current.width + dx),
            height: Math.max(300, startSize.current.height + dy)
        });
    };

    const handleMouseUp = () => {
        isResizing.current = false;
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);
    };

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [history]);

    const handleSend = async () => {
        if (!message.trim()) return;
        try {
            setHistory((prevState) => [...prevState, { message }]);
            setMessage("");
            const response = await chat({ message });
            setHistory((prevState) => [...prevState, { message: response.data.reply }]);
            console.log(response);
        } catch (error) {
            console.error("Error sending message:", error);
        }
    };

    return (
        <div style={styles.container}>
            {isOpen && (
                <div style={{ ...styles.chatWindow, width: `${windowSize.width}px`, height: `${windowSize.height}px` }}>
                    <div style={styles.resizeHandle} onMouseDown={handleMouseDown} />
                    <div style={styles.chatHeader}>
                        <span>[Terminal_Chat.exe]</span>
                        <button style={styles.closeButton} onClick={() => setIsOpen(false)}>_X</button>
                    </div>
                    <div style={styles.chatBody}>
                        <div style={styles.messageBot}>
                            sys_msg: Hello, User. Ready to initialize connection?
                        </div>
                        <div style={styles.messageUser}>
                            &gt; Establish connection
                        </div>
                        <div style={styles.messageBot}>
                            sys_msg: Connection established. How can I assist you today?
                        </div>
                        {history.map((item, index) => (
                            <div key={index} style={index % 2 === 0 ? styles.messageUser : styles.messageBot}>
                                &gt; {item.message}
                            </div>
                        ))}
                        {isLoading && (
                            <div style={styles.messageBot}>
                                sys_msg: Thinking...
                            </div>
                        )}
                        <div ref={messagesEndRef} />
                    </div>
                    <div style={styles.chatFooter}>
                        <span style={{ color: 'var(--accent-color)', alignSelf: 'center' }}>&gt;</span>
                        <input
                            type="text"
                            placeholder="Type a command..."
                            style={styles.input}
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                        />
                        <button style={styles.sendButton} onClick={handleSend}> [ENTER]</button>
                    </div>
                </div>
            )}

            {!isOpen && (
                <div style={styles.buttonContainer}>
                    <div style={styles.labelBubble}>
                        Hi, I am Sayan's AI assistant
                    </div>
                    <button style={styles.floatingButton} onClick={() => setIsOpen(true)}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M12 8V4H8" />
                            <rect width="16" height="12" x="4" y="8" rx="2" />
                            <path d="M2 14h2" />
                            <path d="M20 14h2" />
                            <path d="M15 13v2" />
                            <path d="M9 13v2" />
                        </svg>
                    </button>
                </div>
            )}
        </div>
    );
};

const styles = {
    container: {
        position: 'fixed',
        bottom: '30px',
        right: '30px',
        zIndex: 1000,
        fontFamily: 'var(--font-mono)'
    },
    buttonContainer: {
        display: 'flex',
        alignItems: 'center',
        gap: '15px',
    },
    labelBubble: {
        backgroundColor: 'rgba(10, 10, 10, 0.9)',
        border: '1px solid var(--accent-color)',
        color: 'var(--accent-color)',
        padding: '10px 15px',
        borderRadius: '8px',
        fontSize: '0.9rem',
        boxShadow: '0 0 10px rgba(0, 255, 65, 0.2)',
        whiteSpace: 'nowrap',
    },
    floatingButton: {
        width: '60px',
        height: '60px',
        borderRadius: '50%',
        backgroundColor: 'rgba(10, 10, 10, 0.9)',
        border: '2px solid var(--accent-color)',
        color: 'var(--accent-color)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        boxShadow: '0 0 15px rgba(0, 255, 65, 0.3)',
        transition: 'all 0.3s ease',
    },
    icon: {
        fontSize: '24px',
        fontWeight: 'bold',
    },
    chatWindow: {
        backgroundColor: 'rgba(10, 10, 10, 0.95)',
        border: '1px solid var(--secondary-color)',
        borderRadius: '4px',
        display: 'flex',
        flexDirection: 'column',
        boxShadow: '0 0 20px rgba(0, 255, 65, 0.2)',
        overflow: 'hidden',
        backdropFilter: 'blur(10px)',
        position: 'relative',
    },
    resizeHandle: {
        position: 'absolute',
        top: '0',
        left: '0',
        width: '15px',
        height: '15px',
        cursor: 'nwse-resize',
        zIndex: 20,
        borderTop: '2px solid var(--accent-color)',
        borderLeft: '2px solid var(--accent-color)',
    },
    chatHeader: {
        backgroundColor: '#050505',
        borderBottom: '1px solid var(--secondary-color)',
        padding: '10px 15px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        color: 'var(--accent-color)',
        fontWeight: 'bold',
        fontSize: '0.9rem',
        letterSpacing: '1px',
    },
    closeButton: {
        background: 'none',
        border: 'none',
        color: 'var(--text-color)',
        fontFamily: 'var(--font-mono)',
        fontSize: '1rem',
        cursor: 'pointer',
        transition: 'color 0.2s',
    },
    chatBody: {
        flex: 1,
        padding: '15px',
        overflowY: 'auto',
        display: 'flex',
        flexDirection: 'column',
        gap: '15px',
        fontSize: '0.9rem',
    },
    messageBot: {
        color: 'var(--accent-color)',
        alignSelf: 'flex-start',
        maxWidth: '85%',
        lineHeight: '1.4',
    },
    messageUser: {
        color: 'var(--text-color)',
        alignSelf: 'flex-start',
        maxWidth: '85%',
        lineHeight: '1.4',
        opacity: 0.8,
    },
    chatFooter: {
        borderTop: '1px solid var(--secondary-color)',
        padding: '10px 15px',
        display: 'flex',
        gap: '10px',
        backgroundColor: '#050505',
    },
    input: {
        flex: 1,
        backgroundColor: 'transparent',
        border: 'none',
        color: 'var(--accent-color)',
        fontFamily: 'var(--font-mono)',
        fontSize: '0.9rem',
        outline: 'none',
    },
    sendButton: {
        background: 'none',
        border: 'none',
        color: 'var(--accent-color)',
        fontFamily: 'var(--font-mono)',
        cursor: 'pointer',
        fontWeight: 'bold',
        padding: '5px',
        transition: 'text-shadow 0.2s',
    }
};

export default FloatingChat;
