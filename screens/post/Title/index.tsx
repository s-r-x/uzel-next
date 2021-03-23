import * as S from "./styled";
import { titleTransition, letterVariants, letterTransition } from "./motion";
import { useSplitText } from "@/hooks/useSplitText";
import { Fragment } from "react";

type TProps = {
  title: string;
};
export default function PostTitle(props: TProps) {
  const title = useSplitText(props.title);
  return (
    <S.Container
      transition={titleTransition}
      animate="animate"
      exit="exit"
      initial="initial"
    >
      {title.map((word, idx) => (
        <Fragment key={idx}>
          <S.TitleWord>
            {word.map((letter, idx) => (
              <S.TitleLetter
                transition={letterTransition}
                variants={letterVariants}
                key={idx}
              >
                {letter}
              </S.TitleLetter>
            ))}
          </S.TitleWord>{" "}
        </Fragment>
      ))}
    </S.Container>
  );
}
