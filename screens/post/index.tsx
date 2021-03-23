import TagsList from "@/components/TagsList";
import { GetPostBySlugQuery } from "@/typings/wp";
import { useFormattedDate } from "@/hooks/useFormattedDate";
import * as S from "./styled";
import Image from "_c/Image";
import { useConvertContentToJsx } from "./hooks";
import Head from "next/head";
import Title from "./Title";

type TProps = {
  data: GetPostBySlugQuery;
};
export default function PostScreen({ data: { post } }: TProps) {
  const date = useFormattedDate(post.date);
  const Content = useConvertContentToJsx(post.content);
  return (
    <>
      <Head>
        <title>{post.title}</title>
      </Head>
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
          <Image
            width={post.featuredImage.node.mediaDetails.width}
            height={post.featuredImage.node.mediaDetails.height}
            src={post.featuredImage.node.mediaItemUrl}
            altText={post.featuredImage.node.altText}
          />
        </div>
        {Content}
        <TagsList tags={post.tags.nodes} />
      </S.Container>
    </>
  );
}
