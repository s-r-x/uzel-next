import createStore from "zustand";

type TState = {
  isOpen: boolean;
  section: string;

  toggle: () => void;
  open: () => void;
  close: () => void;
  changeSection: (section: string) => void;
};

export const useAppMenuStore = createStore<TState>((set) => ({
  section: null,
  isOpen: false,

  toggle: () => set(({ isOpen }) => ({ isOpen: !isOpen })),
  close: () => set({ isOpen: false }),
  open: () => set({ isOpen: true }),
  changeSection: (section) => set({ section }),
}));
