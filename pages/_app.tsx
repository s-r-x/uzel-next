import { useRef } from "react";
import AppShell from "../components/AppShell";
import { QueryClient, QueryClientProvider } from "react-query";
import { Hydrate } from "react-query/hydration";
import { AppProps } from "next/app";
import NextNprogress from "nextjs-progressbar";
import "@/styles/index.css";
import Head from "next/head";
import { AnimateSharedLayout } from "framer-motion";

function MyApp({ Component, pageProps }: AppProps) {
  const queryClientRef = useRef<QueryClient>();
  if (!queryClientRef.current) {
    queryClientRef.current = new QueryClient();
  }
  return (
    <QueryClientProvider client={queryClientRef.current}>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, minimal-ui"
          key="viewport-meta"
        />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="keywords"
          content="природа, птицы, животные, путешествия, ханты-мансийск"
        />
        <meta
          name="description"
          content="Фоторассказы о природе и путешествиях"
        />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="apple-mobile-web-app-status-bar-style" content="#5ccaa3" />
        <meta name="apple-mobile-web-app-title" content="Узелковое письмо" />
      </Head>
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
