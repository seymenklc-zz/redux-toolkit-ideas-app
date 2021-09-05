import { configureStore } from "@reduxjs/toolkit";
import ideaSlice from "../features/ideaSlice";

const store = configureStore({
    reducer: {
        ideas: ideaSlice
    }
});

export default store;