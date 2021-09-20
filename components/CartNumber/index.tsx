import useCartContext from "contexts/CartContext";
import styled from "styled-components";

const CartNumber = styled(({ className = "" }) => {
  const { cart } = useCartContext();
  return (
    <p
      className={`bg-black text-white font-medium flex items-center justify-center ${className}`}
    >
      {cart ? cart.length : 0}
    </p>
  );
})`
  width: fit-content;
  font-size: 10px;
  padding: 0.1rem 0.3rem;
`;

export default CartNumber;
