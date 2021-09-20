export interface ProductDetails {
  dimensions: {
    width?: number;
    height?: number;
  };
  size?: number;
  description?: string;
  recommendations: ProductImage[];
}

export interface ProductImage {
  src: string;
  alt: string;
}

export interface Product {
  name: string;
  category: string;
  price: number;
  currency: string;
  image: ProductImage;
  bestseller: boolean;
  featured: boolean;
  details: null | ProductDetails;
}
