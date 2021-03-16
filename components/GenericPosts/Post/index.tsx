import { usePostExcerpt } from "@/hooks/usePostExcerpt";
import { useFormattedDate } from "@/hooks/useFormattedDate";
import { Button } from "_c/Button";
import * as S from "./styled";
import Link from "next/link";
import { CommentIcon, HeartIcon, CalendarIcon } from "_c/Icon";
import Thumb from "../Thumb";

type TProps = {
  data: any;
};
export default function Post({ data }: TProps) {
  const excerpt = usePostExcerpt(data.excerpt);
  const date = useFormattedDate(data.date);
  return (
    <S.Container>
      <Thumb src={data.featuredImage.node.mediaItemUrl} />
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
      <Link href={`/post/${data.slug}`} passHref>
        <Button
          as="a"
          css={`
            margin-top: 20px;
          `}
        >
          Читать
        </Button>
      </Link>
    </S.Container>
  );
}
