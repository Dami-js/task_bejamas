import useCart from "hooks/useCart";
import { Product } from "utils/types";
// import { LocalStorage } from "node-localstorage";
// import localStorage from 'localStorage';

// window.localStorage = new LocalStorage("./scratch");
const PRODUCT_STORAGE_KEY = "product";

export const addItemToLocalStorage = (storage: any, item?: any) => {
  let products = getProductsFromLocalStorage(storage);
  let arr = [];
  if (!products) {
    arr.push(item);
    products = JSON.stringify(arr);
  } else {
    arr = [...JSON.parse(products)];
    arr.push(item);
    products = JSON.stringify(arr);
  }
  storage.setItem(PRODUCT_STORAGE_KEY, products);
};

export const clearItemsFromLocalStorage = (storage: any) => {
  storage.removeItem(PRODUCT_STORAGE_KEY);
};

export const removeItemFromCart = (item: Product) => {};

export const parseProductFromStorage = (storage: any) => {
  return JSON.parse(getProductsFromLocalStorage(storage));
};

export const getProductsFromLocalStorage = (storage: any): any => {
  return storage?.getItem(PRODUCT_STORAGE_KEY) ?? null;
};
