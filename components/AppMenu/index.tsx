import { useAppMenuStore } from "@/stores/app-menu";
import { AnimatePresence } from "framer-motion";
import * as S from "./styled";
import { createPortal } from "react-dom";
import Nav from "./Nav";
import Content from "./Content";
import ScrollLock from "../ScrollLock";
export default function AppMenu() {
  const isOpen = useAppMenuStore((state) => state.isOpen);
  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <S.Container
          transition={{
            staggerChildren: 0.1,
          }}
          animate="animate"
          exit="exit"
          initial="initial"
        >
          <ScrollLock />
          <Content />
          <Nav />
        </S.Container>
      )}
    </AnimatePresence>,
    document.body
  );
}
