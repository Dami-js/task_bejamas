import "tailwindcss/tailwind.css";
import "../styles/base.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import { QueryClient, QueryClientProvider } from "react-query";
import ProductProvider from "providers/ProductProvider";
import CartProvider from "providers/CartProvider";
import { ReactQueryDevtools } from "react-query/devtools";

const queryClient = new QueryClient();

const theme = {};

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <ProductProvider>
          <CartProvider>
            <Component {...pageProps} />
          </CartProvider>
        </ProductProvider>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </ThemeProvider>
  );
}
export default MyApp;
