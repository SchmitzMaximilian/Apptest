
import React, { useState, createContext } from "react";

export const TransactionContext = createContext();

export const TransactionProvider = (props) => {
  const[sprache,setsprache]=useState(true)
  return (
  <TransactionContext.Provider value={[sprache,setsprache]}>
              {props.children}
  </TransactionContext.Provider>
      );
  }