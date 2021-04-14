type TTheme = "light" | "dark";
import createStore from "zustand";
import { persist } from "zustand/middleware";

type TState = {
  theme: TTheme;
  changeTheme: (theme: TTheme) => void;
  toggleTheme: () => void;
};
export const useThemeStore = createStore<TState>(
  persist(
    (set) => ({
      theme: "light",
      changeTheme: (theme) => set({ theme }),
      toggleTheme: () =>
        set((state) => ({ theme: state.theme === "light" ? "dark" : "light" })),
    }),
    {
      name: "theme",
    }
  )
);
