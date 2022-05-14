import { createContext, useEffect, useState } from "react";

const addCartItem = (cartItems, productToAdd) => {
  const isExisted = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id
  ); // if productToAdd.id is existed in cartItems, isExisted will be true

  if (isExisted) {
    // if it is existed, then increase quantity
    return cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  return [...cartItems, { ...productToAdd, quantity: 1 }]; // if it is not existed, add it to cartItems
};

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
  totalQuantity: 0,
});

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [totalQuantity, setTotalQuantity] = useState(0);

  useEffect(() => {
    const newTotal = cartItems.reduce(
      (acc, cartItem) => acc + cartItem.quantity,
      0
    );
    setTotalQuantity(newTotal);
  }, [cartItems]);

  const addItemToCart = (productToAdd) => {
    setCartItems(addCartItem(cartItems, productToAdd));
  };

  const value = {
    isCartOpen,
    setIsCartOpen,
    cartItems,
    addItemToCart,
    totalQuantity,
  };
  return (
    <CartContext.Provider value={value}> {children} </CartContext.Provider>
  );
};
