import * as S from "./styled";
type TProps = {
  itemKey: string;
  title: string;
  isActive: boolean;
  onChange: (section: string) => void;
};
export default function NavItem(props: TProps) {
  return (
    <S.NavItem isActive={props.isActive}>
      <button onClick={() => props.onChange(props.itemKey)}>
        {props.title}
      </button>
    </S.NavItem>
  );
}
