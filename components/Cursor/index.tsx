import * as S from "./styled";
import { useCursorState } from "./hooks";
import { useRouteLoadingState } from "@/hooks/useRouteLoadingState";
import LoadingIndicator from "./LoadingIndicator";

export default function Cursor() {
  const { x, y, isActive } = useCursorState();
  const loadingState = useRouteLoadingState();
  return (
    <S.Container
      animate={{
        background: isActive ? "var(--primary-color)" : "rgba(255,255,255,0)",
      }}
      style={{
        x,
        y,
      }}
    >
      {loadingState === "loading" && <LoadingIndicator />}
    </S.Container>
  );
}
