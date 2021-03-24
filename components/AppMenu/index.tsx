import { useAppMenuStore } from "@/stores/app-menu";
import { AnimatePresence } from "framer-motion";
import * as S from "./styled";
import { createPortal } from "react-dom";
import Nav from "./Nav";
import Content from "./Content";
import ScrollLock from "../ScrollLock";
import { useIsMobile } from "@/hooks/useIsMobile";
import { containerMobileVariants, innerContainerTransition } from "./motion";
export default function AppMenu() {
  const isOpen = useAppMenuStore((state) => state.isOpen);
  const isMobile = useIsMobile();
  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <S.Container
          data-scroll-lock-scrollable
          animate="animate"
          exit="exit"
          initial="initial"
          transition={innerContainerTransition}
          variants={isMobile ? containerMobileVariants : null}
        >
          <ScrollLock />
          <Nav isMobile={isMobile} />
          <Content isMobile={isMobile} />
        </S.Container>
      )}
    </AnimatePresence>,
    document.body
  );
}
