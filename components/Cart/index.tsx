import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "components/Button";
import CartItem from "components/CartItem";
import CartList from "components/CartList";
import CartNumber from "components/CartNumber";
import useCartContext from "contexts/CartContext";
import { useState } from "react";
import styled from "styled-components";

const Cart = styled(({ className }) => {
  const { openCart, setOpenCart, handleClearCart } = useCartContext();
  return (
    <div className={`relative ${className}`}>
      <div className="relative">
        <button onClick={() => setOpenCart(!openCart)}>
          <img src="/img/cart.svg" className="w-9" alt="" />
        </button>
        <div className="absolute -right-2 top-6">
          <CartNumber />
        </div>
      </div>
      {openCart && (
        <div className="p-4 bg-white z-10 border-gray-200 border-2 cart-content absolute transition-all right-0 top-14">
          <div className="flex justify-end">
            <button onClick={() => setOpenCart(false)}>
              <FontAwesomeIcon icon={faTimes} />
            </button>
          </div>
          <div className="mt-1 grid gap-2">
            <CartList />
          </div>
          <div className="mt-6">
            <Button
              variant="outline"
              className="w-full"
              onClick={handleClearCart}
            >
              Clear
            </Button>
          </div>
        </div>
      )}
    </div>
  );
})`
  max-width: 400px;
  .cart-content {
    width: 320px;
    @media (min-width: 768px) {
      width: 400px;
    }
  }
`;

export default Cart;
