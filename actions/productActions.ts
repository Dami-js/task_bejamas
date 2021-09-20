import { Product } from "utils/types";
import axios from "axios";
import { API_BASE_URL } from "utils/constants";

export interface QueryParams {
  _page: number;
  _limit: number;
  category: string[];
  _sort?: string;
  _order?: string;
  price_gte?: number;
  price_lte?: number;
}

export const FEATURED_KEY = "featured";

export const buildQuery = ({ ...queries }: QueryParams) => {
  return {
    ...queries,
  };
};

interface Variables {
  params?: QueryParams;
}

export const getAllProducts = async ({ queryKey }: any) => {
  const [key, { params }] = queryKey;

  try {
    // const options = {}
    const response = await axios({
      url: API_BASE_URL,
      method: "GET",
      params: params ?? null,
    });
    return response;
  } catch (error) {
    console.log(error);
    throw new Error("Error fetching products!");
  }
};

export const getFeaturedProduct = async () => {
  try {
    // const options = {}
    const response = await axios({
      url: API_BASE_URL,
      method: "GET",
      params: {
        featured: true,
      },
    });
    return response;
  } catch (error) {
    console.log(error);
    throw new Error("Error fetching product!");
  }
};
