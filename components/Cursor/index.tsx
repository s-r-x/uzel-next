import * as S from "./styled";
import { useCursorCoords } from "./hooks";

export default function Cursor() {
  const { x, y } = useCursorCoords();
  return (
    <S.Container
      style={{
        x,
        y,
      }}
    />
  );
}
