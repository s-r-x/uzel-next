import { useImagePlaceholder } from "@/hooks/useImagePlaceholder";
import { useImageState } from "./hooks";
import * as S from "./styled";

type TProps = {
  altText?: string;
  width: number;
  height: number;
  src: string;
};
export default function Image(props: TProps) {
  const placeholder = useImagePlaceholder({
    src: props.src,
  });
  const { loaded, onLoad } = useImageState();
  return (
    <S.Container>
      <S.Image
        alt={props.altText}
        onLoad={onLoad}
        $isLoaded={loaded}
        width={props.width}
        height={props.height}
        objectFit="cover"
        draggable={false}
        src={props.src}
        layout="responsive"
      />
      <S.Placeholder
        alt={props.altText}
        isLoaded={loaded}
        draggable={false}
        src={placeholder}
      />
    </S.Container>
  );
}
