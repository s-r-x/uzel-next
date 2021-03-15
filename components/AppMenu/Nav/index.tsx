import * as S from "./styled";
import { innerContainerTransition, navContainerVariants } from "../motion";
import { useAppMenuStore } from "@/stores/app-menu";
import shallow from "zustand/shallow";
import { AppMenuNavConfig } from "./config";
import NavItem from "./Item";

export default function AppMenuNav() {
  const [section, changeSection] = useAppMenuStore(
    (state) => [state.section, state.changeSection],
    shallow
  );
  return (
    <S.Container
      transition={innerContainerTransition}
      variants={navContainerVariants}
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
    </S.Container>
  );
}
