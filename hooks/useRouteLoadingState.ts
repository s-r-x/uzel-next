import { useRouter } from "next/router";
import { useEffect, useState } from "react";

type TLoadingState = "idle" | "loading";
export const useRouteLoadingState = () => {
  const [loadingState, setLoadingState] = useState<TLoadingState>("idle");
  const router = useRouter();
  useEffect(() => {
    const onStart = () => setLoadingState("loading");
    const onEnd = () => setLoadingState("idle");
    router.events.on("routeChangeStart", onStart);
    router.events.on("routeChangeComplete", onEnd);
    router.events.on("routeChangeError", onEnd);
    return () => {
      router.events.off("routeChangeStart", onStart);
      router.events.off("routeChangeComplete", onEnd);
      router.events.off("routeChangeError", onEnd);
    };
  }, []);
  return loadingState;
};
