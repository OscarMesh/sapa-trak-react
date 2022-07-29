import React, { createContext, useReducer } from "react";
import AppReducer from './AppReducer';

// Initial State 

const initialState = {
  transactions: [
    { id: 1, name: "Groceries", amount: 10000, type: "expense" },
    { id: 2, name: "Guitar", amount: 10000, type: "expense" },
    { id: 3, name: "Salary", amount: 10000, type: "Income" },
  ],
};

// Create context 

export const GlobalContext = createContext(initialState);

//provider component 

export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    return(<GlobalContext.Provider value={{

        transactions: state.transactions
    }
    }>
        {children}
    </GlobalContext.Provider>);
}