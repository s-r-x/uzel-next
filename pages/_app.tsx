import { useRef } from "react";
import AppShell from "../components/AppShell";
import { QueryClient, QueryClientProvider } from "react-query";
import { Hydrate } from "react-query/hydration";
import { AppProps } from "next/app";
import NextNprogress from "nextjs-progressbar";
import "@/styles/index.css";
import { AnimateSharedLayout } from "framer-motion";
import DefaultSeo from "@/components/DefaultSeo";

function MyApp({ Component, pageProps }: AppProps) {
  const queryClientRef = useRef<QueryClient>();
  if (!queryClientRef.current) {
    queryClientRef.current = new QueryClient();
  }
  return (
    <QueryClientProvider client={queryClientRef.current}>
      <DefaultSeo/>
      <Hydrate state={pageProps.dehydratedState}>
        <NextNprogress color="var(--primary-color)" height={4} />
        <AppShell>
          <AnimateSharedLayout>
            <Component {...pageProps} />
          </AnimateSharedLayout>
        </AppShell>
      </Hydrate>
    </QueryClientProvider>
  );
}

export default MyApp;
