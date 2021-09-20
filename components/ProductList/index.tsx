import ProductCard from "components/ProductCard";
import useProductContext from "contexts/ProductContext";
import styled from "styled-components";
import { Product } from "utils/types";

const ProductList = styled(({ className = "" }) => {
  const { data, isLoading } = useProductContext();
  return (
    <div className={`${className}`}>
      {isLoading && !data && (
        <p className="text-gray-600 text-center">loading...</p>
      )}

      {!isLoading && data && data?.data.length < 1 && (
        <div className="text-center">
          <p>No product found!</p>
        </div>
      )}

      {!isLoading && data && data?.data.length > 0 && (
        <div className="grid gap-10  md:grid-cols-2 lg:grid-cols-3">
          {data.data.map((item: Product, index: number) => (
            <ProductCard key={index} {...item} />
          ))}
        </div>
      )}
    </div>
  );
})``;

export default ProductList;
