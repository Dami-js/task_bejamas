import { createContext, Dispatch, SetStateAction, useContext } from "react";
import { Product } from "utils/types";

interface ICartContext {
  openCart: boolean;
  cart: any;
  setOpenCart: Dispatch<SetStateAction<boolean>>;
  handleAddToCart: (product?: Product) => void;
  handleClearCart: () => void;
}

export const CartContext = createContext<ICartContext | undefined>(undefined);

const useCartContext = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('use "useCartContext" inside "ProductProvider" ');
  }

  return context;
};

export default useCartContext;
