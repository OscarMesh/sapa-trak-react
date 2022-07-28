import React from "react";
import cancel from "../cancel.svg";

export const TransactionList = () => {
  return (
    <div>
      <h3>TRANSACTION HISTORY</h3>
      <ul>
        <li>
          Design gig
          <div>
            <span className="income-amt">#30000</span>
            <img src={cancel} alt="" />
          </div>
        </li>
        <li>
          Shopping
          <div>
            <span className="expense-amt">#10000</span>
            <img src={cancel} alt="" />
          </div>
        </li>
      </ul>
    </div>
  );
};

export default TransactionList;
