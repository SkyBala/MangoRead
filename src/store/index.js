import { configureStore } from "@reduxjs/toolkit";
import mangaReducer from "./MangaSlice";
import authReducer from "./Modalslice"

export default configureStore({
    reducer: {
        mangaReducer,
        authReducer,
    }
})