import React, { createContext, useState, useContext } from "react";

// Create a new context
export const CustomerContext = createContext<any>("");

export const CustomerProvider = ({ children }: any) => {
  const [open, setOpen] = useState(false);

  return (
    <CustomerContext.Provider value={{ open, setOpen }}>
      {children}
    </CustomerContext.Provider>
  );
};
