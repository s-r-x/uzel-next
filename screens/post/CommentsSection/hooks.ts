import createStore from "zustand";

type TRespondTarget = {
  commentId: number;
  authorName: string;
  avatar: string;
};
type TState = {
  respondTarget?: TRespondTarget;
  changeRespondTarget: (respondTarget: TRespondTarget) => void;
  resetRespondTarget: () => void;
};
export const useCommentFormStore = createStore<TState>((set) => ({
  respondTarget: null,
  changeRespondTarget: (respondTarget) => set({ respondTarget }),
  resetRespondTarget: () => set({ respondTarget: null }),
}));
