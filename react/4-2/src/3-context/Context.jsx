import { createContext, useContext, useState } from "react";

import { Shop } from "./components/Shop";

const CartContext = createContext(undefined);

export const useCart = () => {
  const context = useContext(CartContext);

  if (context === undefined) {
    throw new Error("Cart Context must be used within Provider.");
  }

  return context;
};

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [searchFilter, setSearchFilter] = useState("");

  const addProduct = (product) => {
    setCart((cart) => [...cart, product]);
  };

  const removeProduct = (productId) => {
    setCart((cart) => cart.filter((product) => product.id !== productId));
  };

  const checkout = () => {
    const products = [...cart];
    setCart([]);
    return products;
  };

  const productsInCart = cart.length;

  const value = {
    cart,
    addProduct,
    removeProduct,
    productsInCart,
    checkout,
    searchFilter,
    updateSearchFilter: setSearchFilter,
  };

  return (
    <CartContext.Provider value={{ value }}>{children}</CartContext.Provider>
  );
};

export const Context = () => {
  return (
    <main>
      <h1>React Context API</h1>

      <CartProvider>
        <Shop />
      </CartProvider>

      <footer>
        <span>Shop @ 2024</span>
      </footer>
    </main>
  );
};
