import { configureStore } from "@reduxjs/toolkit";
import { chatApi } from "../Api/ChatApi";

export const store = configureStore({
    reducer: {
        [chatApi.reducerPath]: chatApi.reducer,

    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(chatApi.middleware)



})