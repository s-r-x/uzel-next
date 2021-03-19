import { useRef } from "react";
import AppShell from "../components/AppShell";
import { QueryClient, QueryClientProvider } from "react-query";
import { Hydrate } from "react-query/hydration";
import { ReactQueryDevtools } from "react-query/devtools";
import { AnimatePresence } from "framer-motion";
import { AppProps } from "next/app";
import NextNprogress from "nextjs-progressbar";
import "@/styles/globals.css";

function MyApp({ Component, pageProps, router }: AppProps) {
  const queryClientRef = useRef<QueryClient>();
  if (!queryClientRef.current) {
    queryClientRef.current = new QueryClient();
  }
  return (
    <QueryClientProvider client={queryClientRef.current}>
      <Hydrate state={pageProps.dehydratedState}>
        <NextNprogress color="var(--primary-color)" height={4} />
        <AppShell>
          <AnimatePresence exitBeforeEnter initial={false}>
            <Component key={router.route} {...pageProps} />
          </AnimatePresence>
        </AppShell>
        <ReactQueryDevtools initialIsOpen={false} />
      </Hydrate>
    </QueryClientProvider>
  );
}

export default MyApp;
