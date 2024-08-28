import { configureStore } from "@reduxjs/toolkit";
import TransactionSlice from "./Slices/TransactionSlice";

export const store = configureStore({
    reducer: {
        transactions: TransactionSlice
    }
}) 