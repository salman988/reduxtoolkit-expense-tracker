import React from "react";
import "./NewTransaction.css";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import {
  addTransaction,
 
} from "./Store/Slices/TransactionSlice";

const NewTransaction = () => {
  let dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    reset,
    
  } = useForm();

  const submitTransaction = (data) => {
    reset();
    let id = Math.random() * 10000;
    let newData = { ...data, id };
    dispatch(addTransaction(newData));
  };

  return (
    <div className="newTransactionMain">
      <h2>Add New Transaction</h2>
      <form onSubmit={handleSubmit(submitTransaction)} className="inputSection">
        <input
          type="text"
          {...register("purpose", { required: true })}
          placeholder="Enter Name Here"
        />
        <input
          type="number"
          {...register("amount", { required: true })}
          placeholder="Enter amount Here"
        />
        <button type="submit" className="addTransactionButton">
          Add Transaction
        </button>
      </form>
    </div>
  );
};

export default NewTransaction;
