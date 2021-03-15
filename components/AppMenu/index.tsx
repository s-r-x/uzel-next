import { useAppMenuStore } from "@/stores/app-menu";
import { AnimatePresence } from "framer-motion";
import * as S from "./styled";
import { createPortal } from "react-dom";
import {
  contentContainerVariants,
  innerContainerTransition,
  navContainerVariants,
} from "./motion";
import ScrollLock from "../ScrollLock";
export default function AppMenu() {
  const isOpen = useAppMenuStore((state) => state.isOpen);
  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <S.Container
          transition={{
            staggerChildren: 0.2,
          }}
          animate="animate"
          exit="exit"
          initial="initial"
        >
          <ScrollLock />
          <S.ContentContainer
            transition={innerContainerTransition}
            variants={contentContainerVariants}
          >
            content
          </S.ContentContainer>
          <S.NavContainer
            transition={innerContainerTransition}
            variants={navContainerVariants}
          ></S.NavContainer>
        </S.Container>
      )}
    </AnimatePresence>,
    document.body
  );
}
