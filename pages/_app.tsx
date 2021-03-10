import { useRef } from "react";
import AppShell from "../components/AppShell";
import { QueryClient, QueryClientProvider } from "react-query";
import { Hydrate } from "react-query/hydration";
import { ReactQueryDevtools } from "react-query/devtools";
import { GlobalStyles } from "../styles/globals";

function MyApp({ Component, pageProps }) {
  const queryClientRef = useRef<QueryClient>();
  if (!queryClientRef.current) {
    queryClientRef.current = new QueryClient();
  }
  return (
    <QueryClientProvider client={queryClientRef.current}>
      <Hydrate state={pageProps.dehydratedState}>
        <AppShell>
          <GlobalStyles />
          <Component {...pageProps} />
        </AppShell>
        <ReactQueryDevtools initialIsOpen={false} />
      </Hydrate>
    </QueryClientProvider>
  );
}

export default MyApp;
