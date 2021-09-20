import { createContext, Dispatch, SetStateAction, useContext } from "react";
import { AxiosResponse } from "axios";
import { QueryParams } from "actions";

interface IProductContext {
  openMobileFilter: boolean;
  data: AxiosResponse<any> | undefined;
  isError: boolean;
  isLoading: boolean;
  featuredProduct: AxiosResponse<any> | undefined;
  isErrorFeaturedProduct: boolean;
  isLoadingFeaturedProduct: boolean;
  queries: QueryParams;
  totalCount: number;
  initialQuery: any;
  fetchFeatured: () => any;
  fetch: () => any;
  setTotalCount: Dispatch<SetStateAction<number>>;
  setOpenMobileFilter: Dispatch<SetStateAction<boolean>>;
  setQueries: Dispatch<SetStateAction<QueryParams>>;
}

export const ProductContext = createContext<IProductContext | undefined>(
  undefined
);

const useProductContext = () => {
  const context = useContext(ProductContext);
  if (!context) {
    throw new Error('use "useProductContext" inside "ProductProvider" ');
  }

  return context;
};

export default useProductContext;
