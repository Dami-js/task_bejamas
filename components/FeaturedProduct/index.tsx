import styled from "styled-components";
import { Product } from "utils/types";
import Image from "next/image";
import dogImg from "public/img/dog.png";
import Button from "components/Button";
import useProductContext from "contexts/ProductContext";
import { getFeaturedProduct } from "actions";
import { API_BASE_URI } from "utils/constants";
import useCartContext from "contexts/CartContext";

interface FeaturedProductProps {
  className?: string;
}

const FeaturedProduct = styled(({ className = "" }: FeaturedProductProps) => {
  const { featuredProduct, isLoadingFeaturedProduct } = useProductContext();

  const { handleAddToCart } = useCartContext();

  const product: Product = featuredProduct?.data[0];

  if (isLoadingFeaturedProduct && !product) {
    return (
      <div className="text-center py-5">
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div className={`${className}`}>
      <div className="mb-4 md:flex md:items-center">
        <p className="text-xl font-bold">{product?.name}</p>
        <Button
          className="hidden md:inline-block md:ml-auto"
          onClick={() => handleAddToCart(product)}
        >
          ADD TO CART
        </Button>
      </div>
      <div className="relative mb-4">
        <img
          src={`${API_BASE_URI}${product?.image.src}`}
          alt=""
          className="w-full"
        />
        <span className="py-2 px-4 absolute left-0 bottom-0 bg-white">
          Photo of the day
        </span>
      </div>
      <Button
        className="w-full md:hidden"
        onClick={() => handleAddToCart(product)}
      >
        ADD TO CART
      </Button>
      <div className="mt-8 lg:grid lg:grid-cols-5">
        <div className="lg:col-span-3">
          <p className="font-bold text-lg">About the Samurai King Resting</p>
          <p className="text-gray-600 font-semibold my-2">
            {product?.category}
          </p>
          <p className="text-gray-600 mb-4">{product?.details?.description}</p>
        </div>
        <div className="mt-8 md:flex md:flex-col lg:col-span-2 lg:mt-0 lg:items-end">
          <div className="md:order-2 lg:order-1 ">
            <p className="font-bold text-lg mb-4 lg:text-right">
              People also buy
            </p>
            <div className="grid gap-3 grid-cols-3 md:grid-cols-8 lg:grid-cols-4 mb-8">
              {product?.details?.recommendations.map((item, index) => (
                <div
                  className={
                    index === 0
                      ? "lg:col-start-2 lg:col-end-3"
                      : index === 1
                      ? "lg:col-start-3 lg:col-end-4"
                      : index === 2
                      ? "lg:col-start-4 lg:col-end-5"
                      : ""
                  }
                  key={index}
                >
                  <img
                    src={`${API_BASE_URI}${item.src}`}
                    className="w-full h-32"
                    alt=""
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="md:order-1 lg:order-2 md:mb-4 lg:text-right">
            <p className="font-bold text-lg mb-4">Details</p>
            <p className="text-gray-600">
              Size: {product?.details?.dimensions.width} x{" "}
              {product?.details?.dimensions.height} pixel
            </p>
            <p className="text-gray-600">
              Size: {(Number(product?.details?.size) / 1000).toFixed(1)} mb
            </p>
          </div>
        </div>
      </div>
    </div>
  );
})``;

export default FeaturedProduct;
