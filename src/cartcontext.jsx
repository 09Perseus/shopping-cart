//This file will contain the context for the cart useState variable
import { useState, createContext, useContext } from "react";

const cartcontext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState({});
  return (
    <cartcontext.Provider value={{ cart, setCart }}>
      {children}
    </cartcontext.Provider>
  );
}

export function UseCart() {
  return useContext(cartcontext);
}
