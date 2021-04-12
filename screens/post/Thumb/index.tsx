import { GetPostBySlugQuery } from "@/typings/wp";
import Image from "_c/Image";
import { useIsThumbLayoutActive } from "./hooks";
import * as S from "./styled";

type TProps = {
  media: GetPostBySlugQuery["post"]["featuredImage"]["node"];
  postId: number;
};
export default function PostThumb({ postId, media }: TProps) {
  const layoutActive = useIsThumbLayoutActive();
  return (
    <S.Container layoutId={layoutActive ? `post-thumb-${postId}` : undefined}>
      <Image
        width={media.mediaDetails.width}
        height={media.mediaDetails.height}
        src={media.mediaItemUrl}
        altText={media.altText}
      />
    </S.Container>
  );
}
