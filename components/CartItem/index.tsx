import styled from "styled-components";
import { API_BASE_URI } from "utils/constants";
import { Product } from "utils/types";

const CartItem = styled(
  ({ className = "", data }: { className?: string; data: Product }) => {
    return (
      <div className={`py-5 border-b ${className}`}>
        <div className="grid gap-4 grid-cols-5">
          <div className="col-span-3">
            <p className="font-bold">{data.name}</p>
            <p className="text-gray-600 text-2xl">${data.price.toFixed(2)}</p>
          </div>
          <div className="col-span-2">
            <img
              src={`${API_BASE_URI}${data.image.src}`}
              className="w-full h-20"
              alt=""
            />
          </div>
        </div>
      </div>
    );
  }
)``;

export default CartItem;
