import {
  addItemToLocalStorage,
  clearItemsFromLocalStorage,
  getProductsFromLocalStorage,
  parseProductFromStorage,
} from "actions";
import { CartContext } from "contexts/CartContext";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { Product } from "utils/types";

const CartProvider = styled(({ children, className }) => {
  const [openCart, setOpenCart] = useState(false);
  const [storage, setstorage] = useState<any>();
  const [cart, setCart] = useState(parseProductFromStorage(storage));

  const handleAddToCart = (product?: Product) => {
    const newProduct = { ...product, id: Date.now() };
    addItemToLocalStorage(storage, newProduct);
    setCart(parseProductFromStorage(storage));
    setOpenCart(true);
  };

  const handleClearCart = () => {
    clearItemsFromLocalStorage(storage);
    setOpenCart(false);
  };

  useEffect(() => {
    const storage = window.localStorage;
    setstorage(storage);
  }, []);

  useEffect(() => {
    if (storage) {
      setCart(parseProductFromStorage(storage));
    }
  }, [openCart, storage]);

  return (
    <CartContext.Provider
      value={{ openCart, cart, setOpenCart, handleAddToCart, handleClearCart }}
    >
      <div className={`${className}`}>{children}</div>
    </CartContext.Provider>
  );
})``;

export default CartProvider;
