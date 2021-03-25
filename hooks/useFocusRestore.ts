import { useRef, useEffect, RefObject, useCallback } from "react";

type TProps = {
  refToFocus: RefObject<HTMLElement>;
};
export const useFocusRestore = ({ refToFocus }: TProps) => {
  const oldFocus = useRef<HTMLElement>();
  useEffect(() => {
    oldFocus.current = document.activeElement as HTMLElement;
    refToFocus.current?.focus();
    return () => {
      oldFocus.current?.focus();
    };
  }, [refToFocus]);
  const restore = useCallback(() => {
    oldFocus.current?.focus();
  }, []);
  return restore;
};
