import { usePostExcerpt } from "@/hooks/usePostExcerpt";
import { useFormattedDate } from "@/hooks/useFormattedDate";
import * as S from "./styled";
import Link from "next/link";
import { CommentIcon, HeartIcon, CalendarIcon } from "_c/Icon";
import Thumb from "../Thumb";
import { memo } from "react";
import { TGenericPost } from "../typings";
import TagsList from "@/components/TagsList";
import { LinkBuilder } from "@/services/link-builder";

type TProps = {
  data: TGenericPost;
};
export default memo(function Post({ data }: TProps) {
  const excerpt = usePostExcerpt(data.excerpt);
  const date = useFormattedDate(data.date);
  const image = data.featuredImage.node;
  const link = LinkBuilder.build("post", {
    slug: data.slug,
  });
  return (
    <S.Container>
      <Link passHref href={link}>
        <a>
          <Thumb
            postId={data.postId}
            width={image.mediaDetails.width}
            height={image.mediaDetails.height}
            src={image.mediaItemUrl}
            altText={image.altText}
          />
        </a>
      </Link>
      <S.Header>{data.title}</S.Header>
      <S.Meta>
        <S.MetaItem aria-label={`${data.likesCount} лайков`}>
          <HeartIcon color="var(--heart-color)" />
          <span>{data.likesCount}</span>
        </S.MetaItem>
        {data.commentCount > 0 && (
        <S.MetaItem aria-label={`${data.commentCount} комментариев`}>
          <CommentIcon />
          <span>{data.commentCount}</span>
        </S.MetaItem>
        )}
        <S.MetaItem>
          <CalendarIcon />
          <time dateTime={date}>{date}</time>
        </S.MetaItem>
      </S.Meta>
      <S.Excerpt>{excerpt}</S.Excerpt>
      <TagsList tags={data.tags.nodes} />
      <Link href={link} passHref>
        <S.PostLink title={`Перейти к записи "${data.title}"`}>
          Читать
        </S.PostLink>
      </Link>
    </S.Container>
  );
});
