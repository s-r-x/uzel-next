import * as S from "./styled";
import { useCursorState } from "./hooks";
import { useRouteLoadingState } from "@/hooks/useRouteLoadingState";
import LoadingIndicator from "./LoadingIndicator";

export default function Cursor() {
  const { x, y } = useCursorState();
  const loadingState = useRouteLoadingState();
  return (
    <S.Container
      style={{
        x,
        y,
      }}
    >
      {loadingState === "loading" && <LoadingIndicator />}
    </S.Container>
  );
}
