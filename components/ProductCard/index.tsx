import Button from "components/Button";
import useCartContext from "contexts/CartContext";
import styled from "styled-components";
import { API_BASE_URI } from "utils/constants";
import { Product } from "utils/types";

interface ProductCardProps extends Product {
  className?: string;
}

const ProductCard = styled(
  ({
    className,
    bestseller,
    category,
    price,
    name,
    image,
    ...others
  }: ProductCardProps) => {
    const { handleAddToCart } = useCartContext();
    const product = { bestseller, category, price, name, image, ...others };
    return (
      <div className={`${className}`}>
        <div className="relative img-cont overflow-y-hidden">
          {bestseller && (
            <span className="bg-white text-sm py-1 px-3 absolute top-0 left-0">
              Best Seller
            </span>
          )}
          <img
            src={`${API_BASE_URI}${image.src}`}
            className="w-full md:h-80"
            alt=""
          />
          <Button
            className="w-full absolute -bottom-16 left-0 cart-btn transition-all duration-300"
            onClick={() => handleAddToCart(product)}
          >
            ADD TO CART
          </Button>
        </div>
        <div className="">
          <p className="text-gray-600 text-lg lg:text-base capitalize">
            {category}
          </p>
          <p className="text-2xl lg:text-xl font-bold capitalize">{name}</p>
          <p className="text-gray-600 text-lg lg:text-base">${price}</p>
        </div>
      </div>
    );
  }
)`
  .img-cont {
    &:before {
      display: block;
      width: 100%;
      height: 100%;
      background-color: #00000021;
      position: absolute;
      bottom: -100%;
      left: 0;
      content: "";
    }
    &:hover {
      &:before {
        bottom: 0;
      }
      .cart-btn {
        bottom: 0;
      }
    }
  }
`;

export default ProductCard;
