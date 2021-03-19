import * as S from "./styled";
import { useCursorState } from "./hooks";
import { useRouteLoadingState } from "@/hooks/useRouteLoadingState";
import LoadingIndicator from "./LoadingIndicator";
import { createPortal } from "react-dom";
import { useIsMobile } from "@/hooks/useIsMobile";
import DesktopOnly from "_c/DesktopOnly";

const Cursor = () => {
  const { x, y, isActive, isVisible } = useCursorState();
  const loadingState = useRouteLoadingState();
  const isMobile = useIsMobile();
  if (isMobile) {
    return null;
  }
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
};

export default function DesktopOnlyCursor() {
  return (
    <DesktopOnly>
      <Cursor />
    </DesktopOnly>
  );
}
