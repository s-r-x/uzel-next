import TagsList from "@/components/TagsList";
import { GetPostBySlugQuery } from "@/typings/wp";
import { useFormattedDate } from "@/hooks/useFormattedDate";
import * as S from "./styled";
import { useConvertContentToJsx } from "./hooks";
import Title from "./Title";
import Thumb from "./Thumb";
import Share from "./Share";
import Like from "./Like/loadable";
import Comments from "./CommentsSection";
import { CommentIcon, HeartIcon } from "_c/Icon";
import { CircleButton } from "@/components/Button";
import Seo from "./Seo";
import { usePostExcerpt } from "@/hooks/usePostExcerpt";
import { useQuery } from "react-query";
import { QueryKeysConfig } from "@/config/query-keys";
import { Requests } from "@/network/requests";
import Spin from "@/components/Spin";
import { useExtractPostCategory } from "@/hooks/useExtractPostCategory";

type TProps = {
  data: GetPostBySlugQuery;
  slug: string;
};
const PostScreen = ({ data: { post } }: TProps) => {
  const date = useFormattedDate(post.date);
  const Content = useConvertContentToJsx(post.content);
  const category = useExtractPostCategory(post);
  const excerpt = usePostExcerpt(post.excerpt);
  return (
    <>
      <Seo excerpt={excerpt} post={post} />
      <S.Container>
        <S.Header>
          <S.Category>{category?.name}</S.Category>
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
        <Thumb postId={post.postId} media={post.featuredImage.node} />
        <S.Article>{Content}</S.Article>
        <TagsList tags={post.tags.nodes} />
        <S.ActionsContainer>
          <Share
            excerpt={excerpt}
            picture={post.featuredImage.node.mediaItemUrl}
            title={post.title}
            slug={post.slug}
          />
          <Like postSlug={post.slug} postId={post.postId} />
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
};

export default function PostScreenLoadingContainer(props: TProps) {
  const { data, isLoading } = useQuery(
    [QueryKeysConfig.postBySlug, props.slug],
    () =>
      Requests.getPostBySlug({
        slug: props.slug,
      }),
    {
      initialData: props.data,
      refetchOnWindowFocus: false,
    }
  );
  if (isLoading) {
    return <Spin />;
  }
  return <PostScreen data={data} slug={props.slug} />;
}
