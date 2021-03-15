import * as S from "./styled";
type TProps = {
  itemKey: string;
  title: string;
  isActive: boolean;
  onChange: (section: string) => void;
};
export default function NavItem(props: TProps) {
  return (
    <S.NavItem
      onClick={() => props.onChange(props.itemKey)}
      isActive={props.isActive}
    >
      {props.title}
    </S.NavItem>
  );
}
