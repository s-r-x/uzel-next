import TagsList from "@/components/TagsList";
import { GetPostBySlugQuery } from "@/typings/wp";
import { Variants } from "framer-motion";
import { useFormattedDate } from "../../hooks/useFormattedDate";
import * as S from "./styled";

type TProps = {
  data: GetPostBySlugQuery;
};
const variants: Variants = {
  initial: {
    opacity: 0,
  },
  exit: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
  },
};
export default function PostScreen({ data: { post } }: TProps) {
  const date = useFormattedDate(post.date);
  return (
    <S.Container
      initial="initial"
      exit="exit"
      animate="animate"
      variants={variants}
      transition={{
        duration: 0.2,
      }}
    >
      <S.Header>
        <S.Title>{post.title}</S.Title>
        <S.Date dateTime={post.date}>{date}</S.Date>
      </S.Header>
      <img
        src={post.featuredImage.node.mediaItemUrl}
        alt={post.featuredImage.node.altText}
      />
      <div
        dangerouslySetInnerHTML={{
          __html: post.content,
        }}
      />
      <TagsList tags={post.tags.nodes} />
    </S.Container>
  );
}
