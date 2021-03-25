import { useImagePlaceholder } from "@/hooks/useImagePlaceholder";
import NextImage from "next/image";
import { SyntheticEvent, useState } from "react";
import * as S from "./styled";

type TProps = {
  altText?: string;
  width: number;
  height: number;
  src: string;
};
export default function Image(props: TProps) {
  const [loaded, setLoaded] = useState(false);
  const placeholder = useImagePlaceholder({
    src: props.src,
  });
  const onLoad = ({ target }: SyntheticEvent<HTMLImageElement>) => {
    const tar = target as HTMLImageElement;
    if (!tar.src.includes("data:image")) {
      setLoaded(true);
    }
  };
  return (
    <S.Container>
      <NextImage
        alt={props.altText}
        onLoad={onLoad}
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
