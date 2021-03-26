import { FormEventHandler, useRef } from "react";
import { useCommentFormStore } from "../hooks";
import shallow from "zustand/shallow";
export const useCommentFormState = () => {
  const [respondTarget, resetRespondTarget] = useCommentFormStore(
    (state) => [state.respondTarget, state.resetRespondTarget],
    shallow
  );
  const nameRef = useRef<HTMLInputElement>();
  const emailRef = useRef<HTMLInputElement>();
  const msgRef = useRef<HTMLTextAreaElement>();
  return {
    refs: {
      name: nameRef,
      email: emailRef,
      msg: msgRef,
    },
  };
};
