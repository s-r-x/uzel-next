import { useAppMenuStore } from "@/stores/app-menu";
import { AnimatePresence } from "framer-motion";
import * as S from "./styled";
import { createPortal } from "react-dom";
import Nav from "./Nav";
import Content from "./Content";
import ScrollLock from "../ScrollLock";
import { useIsMobile } from "@/hooks/useIsMobile";
import { containerMobileVariants, innerContainerTransition } from "./motion";
import { useKeyboardControls, usePrefetchRequiredData } from "./hooks";
import { useRef } from "react";
import { useFocusRestore } from "@/hooks/useFocusRestore";
const AppMenu = () => {
  const containerRef = useRef<HTMLElement>();
  usePrefetchRequiredData();
  useKeyboardControls();
  const isMobile = useIsMobile();
  useFocusRestore({ refToFocus: containerRef });
  return createPortal(
    <S.Container
      ref={containerRef}
      role="dialog"
      tabIndex={-1}
      animate="animate"
      exit="exit"
      initial="initial"
      transition={innerContainerTransition}
      variants={isMobile ? containerMobileVariants : null}
    >
      <ScrollLock />
      <Nav isMobile={isMobile} />
      <Content isMobile={isMobile} />
    </S.Container>,
    document.body
  );
};

export default function AppMenuContainer() {
  const isOpen = useAppMenuStore((state) => state.isOpen);
  return <AnimatePresence>{isOpen && <AppMenu />}</AnimatePresence>;
}
