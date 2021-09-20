/* eslint-disable react-hooks/exhaustive-deps */
import Checkbox from "components/Checkbox";
import useProductContext from "contexts/ProductContext";
import { InputHTMLAttributes, useEffect, useState } from "react";
import styled from "styled-components";

const PriceRange = styled(({ className = "" }) => {
  const { setQueries, queries } = useProductContext();
  const [priceGte, setPriceGte] = useState<number>();
  const [priceLte, setPriceLte] = useState<number>();

  const handlePriceRange = (
    min: number | undefined = undefined,
    max: number | undefined = undefined
  ) => {
    setPriceGte(min);
    setPriceLte(max);
  };

  useEffect(() => {
    setQueries({
      ...queries,
      _page: 1,
      price_gte: priceGte,
      price_lte: priceLte,
    });
  }, [priceGte, priceLte]);

  return (
    <div className={`${className}`}>
      <p className="text-lg font-bold mb-4">Price range</p>
      <form>
        <div className="grid gap-4">
          <Checkbox
            label="All"
            type="radio"
            name="price"
            onChange={(e) => handlePriceRange()}
          />
          <Checkbox
            label="Lower than $20"
            type="radio"
            name="price"
            onChange={(e) => handlePriceRange(0, 20)}
          />
          <Checkbox
            label="$20 - $100"
            type="radio"
            name="price"
            onChange={() => handlePriceRange(20, 100)}
          />
          <Checkbox
            label="$100 - $200"
            type="radio"
            name="price"
            onChange={() => handlePriceRange(100, 200)}
          />
          <Checkbox
            label="More than $200"
            type="radio"
            name="price"
            onChange={() => handlePriceRange(200)}
          />
        </div>
      </form>
    </div>
  );
})``;

export default PriceRange;
