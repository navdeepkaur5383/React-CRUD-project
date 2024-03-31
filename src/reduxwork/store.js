import { configureStore } from "@reduxjs/toolkit";
import nameslice from "./nameslice";

export const store=configureStore({
    reducer:{
        name:nameslice
    }
})