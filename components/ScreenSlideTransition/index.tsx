import * as S from "./styled";
import { variants } from "./motion";
import { Easings } from "@/config/easings";
export default function ScreenSlideTransition() {
  return (
    <S.Container
      initial="initial"
      animate="animate"
      exit="exit"
      variants={variants}
      transition={{ duration: 0.5, ease: Easings.one }}
    />
  );
}
