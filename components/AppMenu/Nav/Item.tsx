import { HeartIcon } from "@/components/Icon";
import { motion } from "framer-motion";
import { navItemTransition, navItemVariants } from "./motion";
import * as S from "./styled";
type TProps = {
  itemKey: string;
  title: string;
  isActive: boolean;
  onChange: (section: string) => void;
};
export default function NavItem(props: TProps) {
  return (
    <S.NavItem transition={navItemTransition} variants={navItemVariants}>
      {props.isActive && <S.ActiveIndicator layoutId="underline" />}
      <button onClick={() => props.onChange(props.itemKey)}>
        {props.title}
      </button>
      {props.itemKey === "tour" && (
        <HeartIcon size="24" color="var(--heart-color)" />
      )}
    </S.NavItem>
  );
}
