import { useAppMenuStore } from "@/stores/app-menu";
import { useRouter } from "next/router";
import { useEffect } from "react";

const EVENT = "routeChangeStart";
export const useRouteWatcher = () => {
  const closeAppMenu = useAppMenuStore((state) => state.close);
  const router = useRouter();
  useEffect(() => {
    const onRouteChange = () => {
      closeAppMenu();
    };
    router.events.on(EVENT, onRouteChange);
    return () => router.events.off(EVENT, onRouteChange);
  }, []);
};
