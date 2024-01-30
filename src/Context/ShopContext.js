// ShopContextProvider.js
import React, { createContext, useState } from 'react';
import all_product from '../component/Assets/all_product';

export const ShopContext = createContext(null);

const getDefaultCart = () => {
  let cart = {};
  for (let index = 0; index < all_product.length+1; index++) {
    cart[index] = 0;
  }
  return cart;
};

const ShopContextProvider = (props) => {
  const [cartItems, setCartItem] = useState(getDefaultCart());

  const addToCart = (itemId) => {
    console.log(`Adding item with ID ${itemId} to the cart`);
    setCartItem((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    console.log("Updated Cart:", cartItems);
  };

  const removeFromCart = (itemId) => {
    setCartItem((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };
 
  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = all_product.find((product) => product.id === Number(item));
        totalAmount += itemInfo.new_price * cartItems[item];
      }
    }
    return totalAmount;
  };
  
  const getTotalCartItems = () => {
    let totalItem = 0; 
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        totalItem += cartItems[item];
      }
    }
    return totalItem; 
  };
  const contextValue = {getTotalCartItems, getTotalCartAmount, all_product, cartItems, addToCart, removeFromCart };

  return (
    <div>
      <ShopContext.Provider value={contextValue}>
        {props.children}
      </ShopContext.Provider>
    </div>
  );
};

export default ShopContextProvider;
