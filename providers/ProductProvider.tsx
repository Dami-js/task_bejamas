import { buildQuery, QueryParams } from "actions";
import { ProductContext } from "contexts/ProductContext";
import useProduct from "hooks/useProduct";
import { useEffect, useState } from "react";
import styled from "styled-components";

const ProductProvider = styled(({ children, className }) => {
  const initialQuery = {
    _limit: 6,
    _page: 1,
    _order: "asc",
    _sort: "price",
    category: [],
  };
  const params = buildQuery({
    ...initialQuery,
  });
  const [totalCount, setTotalCount] = useState<number>(0);
  const [openMobileFilter, setOpenMobileFilter] = useState(false);
  const [queries, setQueries] = useState<QueryParams>({
    ...params,
  });
  const {
    data,
    isError,
    isLoading,
    featuredProduct,
    isLoadingFeaturedProduct,
    isErrorFeaturedProduct,
    fetchFeatured,
    refetch: fetch,
  } = useProduct({ params: { ...queries } });

  useEffect(() => {
    fetch();
  }, [fetch, queries]);

  useEffect(() => {
    fetchFeatured();
  }, []);

  useEffect(() => {
    if (data) {
      setTotalCount(data?.headers["x-total-count"]);
    }
  }, [data]);

  return (
    <ProductContext.Provider
      value={{
        openMobileFilter,
        data,
        isError,
        isLoading,
        queries,
        totalCount,
        featuredProduct,
        isLoadingFeaturedProduct,
        isErrorFeaturedProduct,
        initialQuery,
        fetchFeatured,
        setTotalCount,
        setQueries,
        setOpenMobileFilter,
        fetch,
      }}
    >
      <div className={`${className}`}>{children}</div>
    </ProductContext.Provider>
  );
})``;

export default ProductProvider;
