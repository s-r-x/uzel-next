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
import { CommentIcon } from "_c/Icon";
import { CircleButton } from "@/components/Button";
import Seo from "./Seo";

type TProps = {
  data: GetPostBySlugQuery;
};
export default function PostScreen({ data: { post } }: TProps) {
  const date = useFormattedDate(post.date);
  const Content = useConvertContentToJsx(post.content);
  return (
    <>
      <Seo post={post} />
      <S.Container>
        <S.Header>
          <Title title={post.title} />
          <S.Date dateTime={post.date}>{date}</S.Date>
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
        <div
          css={`
            display: flex;
            align-items: center;
            justify-content: center;
            margin-top: 20px;
            > * {
              margin: 10px;
            }
          `}
        >
          <Share title={post.title} slug="slug" />
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
        </div>
        <Comments postId={post.postId} />
      </S.Container>
    </>
  );
}
