import * as S from "./styled";
import { contentContainerVariants, innerContainerTransition } from "../motion";
import { useAppMenuStore } from "@/stores/app-menu";
import Logo from "@/components/Logo";
import Tags from "../TagsSection";
import Observations from "../ObservationsSection/loadable";
import Comments from "../CommentsSection";
import Search from "../SearchSection";
import { usePreloadModules } from "@/hooks/usePreloadModules";

type TProps = {
  isMobile: boolean;
};
export default function AppMenuContent(props: TProps) {
  const section = useAppMenuStore((state) => state.section);
  usePreloadModules([Observations], { delay: 1000 });
  return (
    <S.Container
      data-scroll-lock-scrollable
      transition={innerContainerTransition}
      variants={props.isMobile ? null : contentContainerVariants}
      animate="animate"
      exit="exit"
      initial="initial"
      role="tabpanel"
      tabIndex={0}
      aria-labelledby={`app-menu-${section}_tab`}
      id={`app-menu-${section}_panel`}
    >
      {section ? (
        <>
          {section === "search" && <Search />}
          {section === "tags" && <Tags />}
          {section === "observations" && <Observations />}
          {section === "comments" && <Comments />}
        </>
      ) : (
        <Logo
          css={`
            width: 256px;
            margin: auto;
          `}
        />
      )}
    </S.Container>
  );
}
