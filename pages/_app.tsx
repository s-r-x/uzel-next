import { useRef } from "react";
import AppShell from "../components/AppShell";
import { QueryClient, QueryClientProvider } from "react-query";
import { Hydrate } from "react-query/hydration";
import { AppProps } from "next/app";
import NextNprogress from "nextjs-progressbar";
import "@/styles/index.css";
import DefaultSeo from "@/components/DefaultSeo";
import { YMInitializer } from "react-yandex-metrika";
import { AnalyticsConfig } from "@/config/analytics";
import { useThemeEffect } from "@/hooks/useThemeEffect";

function MyApp({ Component, pageProps }: AppProps) {
  const queryClientRef = useRef<QueryClient>();
  useThemeEffect();
  if (!queryClientRef.current) {
    queryClientRef.current = new QueryClient();
  }
  return (
    <QueryClientProvider client={queryClientRef.current}>
      <DefaultSeo />
      <Hydrate state={pageProps.dehydratedState}>
        <NextNprogress color="var(--primary-color)" height={4} />
        <AppShell>
          <Component {...pageProps} />
        </AppShell>
      </Hydrate>
      <YMInitializer
        options={{ webvisor: true }}
        accounts={[AnalyticsConfig.yandexMetrikaId]}
      />
    </QueryClientProvider>
  );
}

export default MyApp;
