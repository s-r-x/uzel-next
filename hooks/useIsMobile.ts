import { DevicesConfig } from "@/config/devices";
import { useMediaQuery } from "./useMediaQuery";

export const useIsMobile = () => {
  return useMediaQuery({
    query: `(max-width: ${DevicesConfig.mobileBreakpoint}px)`,
  });
};
