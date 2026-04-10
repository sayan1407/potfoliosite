import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const chatApi = createApi({
  reducerPath: "apiBook",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://portfolioagentapi-dehchhbsa9hjfghn.canadacentral-01.azurewebsites.net/",

  }),
  tagTypes: ["Chats"],
  endpoints: (builder) => ({
    //QUERY -> GET
    //MUTATION -> POST/PUT/DELETE
    chat: builder.mutation({
      query: ({ message }) => ({
        url: `chat`,
        method: "POST",
        body: {
          message: message,
          history: []
        }
      }),

      providesTags: ["Chats"]
    }),



  }),
});
export const { useChatMutation
} = chatApi;