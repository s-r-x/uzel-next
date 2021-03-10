import { usePostExcerpt } from "../../hooks/usePostExcerpt";
import { useFormattedDate } from "../../../hooks/useFormattedDate";
import { Button } from "../../../components/Button";
import * as S from "./styled";

type TProps = {
  data: any;
};
export default function Post({ data }: TProps) {
  const excerpt = usePostExcerpt(data.excerpt);
  const date = useFormattedDate(data.date);
  return (
    <S.Container>
      <S.Thumb src={data.featuredImage.node.mediaItemUrl} />
      <div>{date}</div>
      <S.Header>{data.title}</S.Header>
      <S.Excerpt>{excerpt}</S.Excerpt>
      <Button
        css={`
          margin-top: 13px;
        `}
      >
        Читать
      </Button>
    </S.Container>
  );
}
