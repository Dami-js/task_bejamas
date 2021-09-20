import CartItem from "components/CartItem";
import useCartContext from "contexts/CartContext";
import styled from "styled-components";
import { Product } from "utils/types";

const CartList = styled(({ className = "" }) => {
  const { cart } = useCartContext();
  return (
    <div className={`${className}`}>
      {(!cart || cart.length < 1) && (
        <div className="">
          <p className="text-gray-500">
            No products in cart, kindly select a product to cart
          </p>
        </div>
      )}
      {cart &&
        cart.length > 0 &&
        cart.map((item: Product, index: number) => (
          <CartItem data={item} key={index} />
        ))}
    </div>
  );
})``;

export default CartList;
