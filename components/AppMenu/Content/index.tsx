import * as S from "./styled";
import { contentContainerVariants, innerContainerTransition } from "../motion";
import { useAppMenuStore } from "@/stores/app-menu";
import Logo from "@/components/Logo";
import Tags from "../TagsSection";
import Observations from "../ObservationsSection/loadable";
import Comments from "../CommentsSection";
import Search from "../SearchSection";
import { usePreloadModules } from "@/hooks/usePreloadModules";
import Tours from "../ToursSection";
import { AnimatePresence } from "framer-motion";

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
        <AnimatePresence exitBeforeEnter>
          {section === "search" && <Search key="content-search" />}
          {section === "tags" && <Tags key="content-tags" />}
          {section === "observations" && (
            <Observations key="content-observations" />
          )}
          {section === "comments" && <Comments key="content-comments" />}
          {section === "tours" && <Tours key="content-tours" />}
        </AnimatePresence>
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
