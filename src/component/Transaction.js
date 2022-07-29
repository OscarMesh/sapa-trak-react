import React from "react";
import cancel from "../cancel.svg";

export const Transaction = ({ transaction }) => {


  return (
    <li>
      {transaction.name}
      <div>
        <span
          className={
            (transaction.type == "expense" ? "expense-amt" : "income-amt")
          }
        >
          {transaction.amount}
        </span>
        <img src={cancel} alt="" />
      </div>
    </li>
  );
};

export default Transaction;
