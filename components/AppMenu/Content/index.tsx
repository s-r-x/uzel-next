import * as S from "./styled";
import { contentContainerVariants, innerContainerTransition } from "../motion";
import { useAppMenuStore } from "@/stores/app-menu";
import Logo from "@/components/Logo";
import Tags from "../TagsSection";
import Observations from "../ObservationsSection";
import Comments from "../CommentsSection";
export default function AppMenuContent() {
  const section = useAppMenuStore((state) => state.section);
  return (
    <S.Container
      transition={innerContainerTransition}
      variants={contentContainerVariants}
    >
      {section ? (
        <>
          {section === "tags" && <Tags />}
          {section === "observations" && <Observations />}
          {section === "comments" && <Comments />}
        </>
      ) : (
        <Logo
          css={`
            width: 256px;
          `}
        />
      )}
    </S.Container>
  );
}
