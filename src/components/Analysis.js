import React from "react";
import "./Analysis.css";
import { useSelector } from "react-redux";
const Analysis = () => {
  let income = useSelector((store) => {
    return store.transactions.income;
  });

  let expense = useSelector((store) => {
    return store.transactions.expense;
  });

  return (
    <div className="analysisMain">
      <div className="analysisSectionTop">
        {/* <h4>Expense Tracker
                <h5>by</h5>  Muhammad Salman</h4>
              <br/> */}
        <h4>Current Balance</h4>
        <h1>${income - Math.abs(expense)}</h1>
      </div>
      <div className="inc-exp-container">
        <div className="money plus">
          {" "}
          Income <br /> ${income}{" "}
        </div>
        <div className="money minus">
          {" "}
          Expense <br /> ${Math.abs(expense)}{" "}
        </div>
      </div>
    </div>
  );
};

export default Analysis;
