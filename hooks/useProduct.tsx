import {
  buildQuery,
  getAllProducts,
  getFeaturedProduct,
  QueryParams,
} from "actions";
import { useQuery } from "react-query";

const useProduct = ({ params }: { params: QueryParams }) => {
  const { data, isLoading, isError, refetch } = useQuery({
    queryKey: ["fetchAllProducts", { params }],
    queryFn: getAllProducts,
    enabled: false,
    retry: false,
  });

  const {
    data: featuredProduct,
    isLoading: isLoadingFeaturedProduct,
    isError: isErrorFeaturedProduct,
    refetch: fetchFeatured,
  } = useQuery({
    queryKey: "getFeaturedProduct",
    queryFn: getFeaturedProduct,
    enabled: false,
    retry: 3,
  });

  return {
    data,
    isLoading,
    isError,
    featuredProduct,
    isLoadingFeaturedProduct,
    isErrorFeaturedProduct,
    fetchFeatured,
    refetch,
  };
};

export default useProduct;
