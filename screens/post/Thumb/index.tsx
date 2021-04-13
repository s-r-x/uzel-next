import { GetPostBySlugQuery } from "@/typings/wp";
import Image from "_c/Image";
import * as S from "./styled";

type TProps = {
  media: GetPostBySlugQuery["post"]["featuredImage"]["node"];
  postId: number;
};
export default function PostThumb({ postId, media }: TProps) {
  return (
    <S.Container layoutId={`post-thumb-${postId}`}>
      <Image
        width={media.mediaDetails.width}
        height={media.mediaDetails.height}
        src={media.mediaItemUrl}
        altText={media.altText}
      />
    </S.Container>
  );
}
