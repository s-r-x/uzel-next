import * as S from "./styled";
import Image from "_c/Image";

type TProps = {
  src: string;
  width: number;
  height: number;
  altText?: string;
  postId: number;
};

export default function PostThumb({ src, width, height, altText }: TProps) {
  return (
    <S.ThumbContainer>
      <Image altText={altText} width={width} height={height} src={src} />
    </S.ThumbContainer>
  );
}
