import * as S from "./styled";
import { contentContainerVariants, innerContainerTransition } from "../motion";
import { useAppMenuStore } from "@/stores/app-menu";
import Logo from "@/components/Logo";
import Tags from "../TagsSection";
export default function AppMenuContent() {
  const section = useAppMenuStore((state) => state.section);
  return (
    <S.Container
      transition={innerContainerTransition}
      variants={contentContainerVariants}
    >
      {section ? (
        <>{section === "tags" && <Tags />}</>
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
