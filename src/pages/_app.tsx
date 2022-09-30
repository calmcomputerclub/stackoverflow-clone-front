import "../styles/globals.css";
import type { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Appbar from "../components/ui/Appbar";

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <Appbar />
      <Component {...pageProps} />
    </QueryClientProvider>
  );
}

export default MyApp;
