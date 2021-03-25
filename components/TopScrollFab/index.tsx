import { useCallback } from "react";
import { CircleButton } from "../Button";
import { AngleTopIcon } from "../Icon";
import { useScrollState } from "./hooks";
import * as S from "./styled";
export default function TopScrollFab() {
  const { progress } = useScrollState();
  const onClick = useCallback(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <S.Container
      style={{
        // @ts-ignore
        opacity: progress,
      }}
    >
      <CircleButton title="Наверх" onClick={onClick}>
        <AngleTopIcon size={24} />
      </CircleButton>
    </S.Container>
  );
}
