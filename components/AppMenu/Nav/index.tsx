import * as S from "./styled";
import { innerContainerTransition } from "../motion";
import { useAppMenuStore } from "@/stores/app-menu";
import shallow from "zustand/shallow";
import { AppMenuNavConfig } from "./config";
import NavItem from "./Item";
import { navContainerVariants, navListVariants } from "./motion";
import { AnimateSharedLayout } from "framer-motion";

type TProps = {
  isMobile: boolean;
};
export default function AppMenuNav(props: TProps) {
  const [section, changeSection] = useAppMenuStore(
    (state) => [state.section, state.changeSection],
    shallow
  );
  return (
    <AnimateSharedLayout>
      <S.Container>
        {!props.isMobile && (
          <S.AnimatedSheet
            transition={innerContainerTransition}
            variants={navContainerVariants}
          />
        )}
        <S.NavItemsList
          data-scroll-lock-scrollable
          variants={navListVariants}
          animate="animate"
          exit="exit"
          initial="initial"
        >
          {AppMenuNavConfig.sections.map(({ title, key }) => (
            <NavItem
              isMobile={props.isMobile}
              onChange={changeSection}
              isActive={section === key}
              key={key}
              itemKey={key}
              title={title}
            />
          ))}
        </S.NavItemsList>
      </S.Container>
    </AnimateSharedLayout>
  );
}
