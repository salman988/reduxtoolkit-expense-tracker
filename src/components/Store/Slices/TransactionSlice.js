import { createSlice } from "@reduxjs/toolkit";

const transactions = createSlice({
  name: "transactions",
  initialState: {
    transactions: [],
    expense: 0,
    income: 0,
  },
  reducers: {
    addTransaction: (state, action) => {
      state.transactions.push(action.payload);

      let income = 0;
      let expense = 0;
      state.transactions.forEach((item) => {
        if (+item.amount < 0) {
          expense += +item.amount;
        } else {
          income += +item.amount;
        }
      });
      state.income = income;
      state.expense = expense;
    },
    deleteTransaction: (state, action) => {
      let id = action.payload;
      state.transactions = state.transactions.filter((item) => item.id !== id);
      let income = 0;
      let expense = 0;
      state.transactions.forEach((item) => {
        if (+item.amount < 0) {
          expense += +item.amount;
        } else {
          income += +item.amount;
        }
      });
      state.income = income;
      state.expense = expense;
    },
  },
});

export const { addTransaction, deleteTransaction } = transactions.actions;

export default transactions.reducer;
