import * as S from "./styled";
import { variants } from "./motion";
import { Easings } from "@/config/easings";
import { createPortal } from "react-dom";
export default function ScreenSlideTransition() {
  return createPortal(
    <S.Container
      initial="initial"
      animate="animate"
      exit="exit"
      variants={variants}
      transition={{ duration: 0.5, ease: Easings.one }}
    />,
    document.body
  );
}
