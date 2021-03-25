import TagsList from "@/components/TagsList";
import { GetPostBySlugQuery } from "@/typings/wp";
import { useFormattedDate } from "@/hooks/useFormattedDate";
import * as S from "./styled";
import Image from "_c/Image";
import { useConvertContentToJsx } from "./hooks";
import Title from "./Title";
import Share from "./Share";
import Like from "./Like/loadable";
import Comments from "./CommentsSection";
import { motion } from "framer-motion";
import { CommentIcon, HeartIcon } from "_c/Icon";
import { CircleButton } from "@/components/Button";
import Seo from "./Seo";
import { usePostExcerpt } from "@/hooks/usePostExcerpt";

type TProps = {
  data: GetPostBySlugQuery;
};
export default function PostScreen({ data: { post } }: TProps) {
  const date = useFormattedDate(post.date);
  const Content = useConvertContentToJsx(post.content);
  const excerpt = usePostExcerpt(post.excerpt);
  return (
    <>
      <Seo excerpt={excerpt} post={post} />
      <S.Container>
        <S.Header>
          <S.Category>{post.categories?.nodes?.[0]?.name}</S.Category>
          <Title title={post.title} />
          <time dateTime={post.date}>{date}</time>
          <S.CountersContainer>
            <S.Counter>
              <HeartIcon color="var(--heart-color)" />
              <span>{post.likesCount}</span>
            </S.Counter>
            <S.Counter>
              <CommentIcon />
              <span>{post.commentCount || 0}</span>
            </S.Counter>
          </S.CountersContainer>
        </S.Header>
        <div
          css={`
            text-align: center;
          `}
        >
          <motion.div layoutId={`post-thumb-${post.postId}`}>
            <Image
              width={post.featuredImage.node.mediaDetails.width}
              height={post.featuredImage.node.mediaDetails.height}
              src={post.featuredImage.node.mediaItemUrl}
              altText={post.featuredImage.node.altText}
            />
          </motion.div>
        </div>
        {Content}
        <TagsList tags={post.tags.nodes} />
        <S.ActionsContainer>
          <Share
            excerpt={excerpt}
            picture={post.featuredImage.node.mediaItemUrl}
            title={post.title}
            slug="slug"
          />
          <Like />
          <CircleButton
            onClick={() => {
              const $el = document.querySelector(
                "#comment-form_message"
              ) as HTMLInputElement;
              $el.focus();
            }}
            title="Оставить комментарий"
            css={`
              --btn-size: 64px;
            `}
          >
            <CommentIcon size={32} />
          </CircleButton>
        </S.ActionsContainer>
        <Comments postId={post.postId} />
      </S.Container>
    </>
  );
}
