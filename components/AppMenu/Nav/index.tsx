import * as S from "./styled";
import { innerContainerTransition } from "../motion";
import { useAppMenuStore } from "@/stores/app-menu";
import shallow from "zustand/shallow";
import { AppMenuNavConfig } from "./config";
import NavItem from "./Item";
import { navContainerVariants, navListVariants } from "./motion";

export default function AppMenuNav() {
  const [section, changeSection] = useAppMenuStore(
    (state) => [state.section, state.changeSection],
    shallow
  );
  return (
    <>
      <S.Container>
        <S.AnimatedSheet
          transition={innerContainerTransition}
          variants={navContainerVariants}
        />
        <S.NavItemsList
          variants={navListVariants}
          animate="animate"
          exit="exit"
          initial="initial"
        >
          {AppMenuNavConfig.sections.map(({ title, key }) => (
            <NavItem
              onChange={changeSection}
              isActive={section === key}
              key={key}
              itemKey={key}
              title={title}
            />
          ))}
        </S.NavItemsList>
      </S.Container>
    </>
  );
}
