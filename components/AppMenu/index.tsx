import { useAppMenuStore } from "@/stores/app-menu";
import { AnimatePresence } from "framer-motion";
import * as S from "./styled";
import { createPortal } from "react-dom";
import { contentContainerVariants, navContainerVariants } from "./motion";
export default function AppMenu() {
  const isOpen = useAppMenuStore((state) => state.isOpen);
  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <S.Container
          transition={{
            staggerChildren: 0.7,
          }}
          animate="animate"
          exit="exit"
          initial="initial"
        >
          <S.ContentContainer variants={contentContainerVariants}>
            content
          </S.ContentContainer>
          <S.NavContainer variants={navContainerVariants}></S.NavContainer>
        </S.Container>
      )}
    </AnimatePresence>,
    document.body
  );
}
