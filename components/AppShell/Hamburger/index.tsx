import * as S from "./styled";

type TProps = {
  className?: string;
};
export default function Hamburger(props: TProps) {
  return (
    <S.Container className={props.className}>
      <span />
      <span />
      <span />
    </S.Container>
  );
}
