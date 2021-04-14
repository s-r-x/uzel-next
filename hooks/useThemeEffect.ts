import { useThemeStore } from "@/stores/theme";
import { useEffect } from "react";

export const useThemeEffect = () => {
  const theme = useThemeStore((state) => state.theme);
  useEffect(() => {
    if (theme === "light") {
      document.body.classList.remove("dark");
    } else if (theme === "dark") {
      document.body.classList.add("dark");
    }
  }, [theme]);
};
