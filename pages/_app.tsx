import { useRef } from "react";
import AppShell from "../components/AppShell";
import { QueryClient, QueryClientProvider } from "react-query";
import { Hydrate } from "react-query/hydration";
import { AnimatePresence } from "framer-motion";
import { AppProps } from "next/app";
import NextNprogress from "nextjs-progressbar";
import "@/styles/globals.css";
import Head from "next/head";

function MyApp({ Component, pageProps, router }: AppProps) {
  const queryClientRef = useRef<QueryClient>();
  if (!queryClientRef.current) {
    queryClientRef.current = new QueryClient();
  }
  return (
    <QueryClientProvider client={queryClientRef.current}>
      <Head>
        <meta
          name="viewport"
          content="initial-scale=1.0, width=device-width"
          key="viewport-meta"
        />
      </Head>
      <Hydrate state={pageProps.dehydratedState}>
        <NextNprogress color="var(--primary-color)" height={4} />
        <AppShell>
          <AnimatePresence exitBeforeEnter initial={false}>
            <Component key={router.route} {...pageProps} />
          </AnimatePresence>
        </AppShell>
      </Hydrate>
    </QueryClientProvider>
  );
}

export default MyApp;
