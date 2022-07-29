import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export const Balance = () => {
  const { transactions } = useContext(GlobalContext);
  


  // const CalcBalance = () => {
  //   let income = 0;
  //   let expense = 0;
  //   let balance = 0;
  //   transactions.map((transaction) => {
  //     transaction.type === "expense"
  //       ? (expense += transaction.amount)
  //       : (income += transaction.amount);
  //   });

  //    balance = income - expense;
  //    console.log(balance);
  //   };
  return (
    <div className="balance">
      <p>Available Balance</p>
      <div className="amt">
        <p id="balance"></p>
      </div>
    </div>
  );
};

export default Balance;
