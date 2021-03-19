import * as S from "./styled";
import { useCursorState } from "./hooks";
import { useRouteLoadingState } from "@/hooks/useRouteLoadingState";
import LoadingIndicator from "./LoadingIndicator";
import { createPortal } from "react-dom";

export default function Cursor() {
  const { x, y, isActive, isVisible } = useCursorState();
  const loadingState = useRouteLoadingState();
  return createPortal(
    <S.Container
      initial={false}
      animate={{
        scale: isActive ? 1.5 : 1,
        opacity: isVisible ? 1 : 0,
        x,
        y,
      }}
    >
      {loadingState === "loading" && <LoadingIndicator />}
    </S.Container>,
    document.body
  );
}
