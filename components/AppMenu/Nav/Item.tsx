import { HeartIcon } from "@/components/Icon";
import {
  activeIndicatiorTransition,
  navItemTransition,
  navItemVariants,
} from "./motion";
import * as S from "./styled";

type TProps = {
  itemKey: string;
  title: string;
  isActive: boolean;
  isMobile: boolean;
  onChange: (section: string) => void;
};
export default function NavItem(props: TProps) {
  return (
    <S.NavItem transition={navItemTransition} variants={navItemVariants}>
      {props.isActive && (
        <S.ActiveIndicator
          transition={activeIndicatiorTransition}
          layoutId="nav-active-indicator"
        />
      )}
      <button
        role="tab"
        id={`app-menu-${props.itemKey}_tab`}
        aria-controls={`app-menu-${props.itemKey}_panel`}
        aria-selected={props.isActive}
        onClick={() => props.onChange(props.itemKey)}
      >
        {props.title}
      </button>
      {props.itemKey === "tour" && (
        <HeartIcon size={props.isMobile ? 18 : 24} color="var(--heart-color)" />
      )}
    </S.NavItem>
  );
}
