import { usePostExcerpt } from "@/hooks/usePostExcerpt";
import { useFormattedDate } from "@/hooks/useFormattedDate";
import * as S from "./styled";
import Link from "next/link";
import { CommentIcon, HeartIcon, CalendarIcon } from "_c/Icon";
import Thumb from "../Thumb";
import { memo } from "react";
import { TGenericPost } from '../typings';

type TProps = {
  data: TGenericPost;
};
export default memo(function Post({ data }: TProps) {
  const excerpt = usePostExcerpt(data.excerpt);
  const date = useFormattedDate(data.date);
  const image = data.featuredImage.node;
  return (
    <S.Container>
      <Thumb
        postId={data.postId}
        width={image.mediaDetails.width}
        height={image.mediaDetails.height}
        src={image.mediaItemUrl}
        altText={image.altText}
      />
      <S.Header>{data.title}</S.Header>
      <S.Meta>
        <S.MetaItem>
          <HeartIcon color="var(--heart-color)" />
          <span>{data.likesCount}</span>
        </S.MetaItem>
        <S.MetaItem>
          <CommentIcon />
          <span>{data.commentCount || 0}</span>
        </S.MetaItem>
        <S.MetaItem>
          <CalendarIcon />
          <span>{date}</span>
        </S.MetaItem>
      </S.Meta>
      <S.Excerpt>{excerpt}</S.Excerpt>
      {/*<S.TagsContainer>
        {data.tags.nodes.map(({ name, id }) => (
          <S.Tag key={id}>#{name}</S.Tag>
        ))}
      </S.TagsContainer>
        */}
      <Link scroll={true} href={`/post/${data.slug}`} passHref>
        <S.PostLink>Читать</S.PostLink>
      </Link>
    </S.Container>
  );
});
