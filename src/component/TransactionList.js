import React, { useContext } from "react";

import { GlobalContext } from '../context/GlobalState';
import Transaction from "./Transaction";


export const TransactionList = () => {

    const { transactions } = useContext(GlobalContext); 

  return (
    <div>
      <h3>TRANSACTION HISTORY</h3>
      <ul>
        {transactions.map((transaction) => (<Transaction key={transaction.id} transaction={transaction} /> ))}
      </ul>
    </div>
  );
};

export default TransactionList;
