import * as S from "./styled";
import { useCursorState } from "./hooks";
import { useRouteLoadingState } from "@/hooks/useRouteLoadingState";
import LoadingIndicator from "./LoadingIndicator";
import { createPortal } from "react-dom";

export default function Cursor() {
  const { x, y, isActive } = useCursorState();
  const loadingState = useRouteLoadingState();
  return createPortal(
    <S.Container
      animate={{
        background: isActive ? "var(--primary-color)" : "rgba(255,255,255,0)",
        scale: isActive ? 1.5 : 1,
      }}
      style={{
        x,
        y,
      }}
    >
      {loadingState === "loading" && <LoadingIndicator />}
    </S.Container>,
    document.body
  );
}
