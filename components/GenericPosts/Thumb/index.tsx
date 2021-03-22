import * as S from "./styled";
import Image from "next/image";
import { SyntheticEvent, useState } from "react";

type TProps = {
  src: string;
  width: number;
  height: number;
  altText?: string;
};

export default function PostThumb({ src, width, height, altText }: TProps) {
  const [loaded, setLoaded] = useState(false);
  const onLoad = ({ target }: SyntheticEvent<HTMLImageElement>) => {
    const tar = target as HTMLImageElement;
    if (!tar.src.includes("data:image")) {
      setLoaded(true);
    }
  };
  return (
    <S.ThumbContainer isVisible={loaded}>
      <Image
        alt={altText}
        onLoad={onLoad}
        width={width}
        height={height}
        objectFit="cover"
        draggable={false}
        src={src}
        layout="responsive"
      />
    </S.ThumbContainer>
  );
}
