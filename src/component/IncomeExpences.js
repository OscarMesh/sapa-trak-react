import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import rectangle from "../rectangle.svg";

export const IncomeExpences = () => {
  const { transactions } = useContext(GlobalContext);
  
  return (
    <div className="inc-exp">
      <div className="inc">
        <p>Income</p>
        <div className="amt">
          <span id="income">#30,000</span>
        </div>
      </div>
      <img src={rectangle} alt="" />
      <div className="exp">
        <p>Expenses</p>
        <div className="amt">
          <p id="expenses">#30,000</p>
        </div>
      </div>
    </div>
  );
};

export default IncomeExpences;
