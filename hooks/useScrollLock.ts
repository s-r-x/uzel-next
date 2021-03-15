import { disablePageScroll, enablePageScroll } from "scroll-lock";
import { useEffect } from "react";

export const useScrollLock = () => {
  useEffect(() => {
    disablePageScroll();
    return () => {
      enablePageScroll();
    };
  }, []);
};
