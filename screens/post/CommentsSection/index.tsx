import CommentForm from "./CommentForm";
import CommentsList from "./CommentsList";
import * as S from "./styled";

type TProps = {
  postId: number;
};
export default function PostCommentsSection(props: TProps) {
  return (
    <S.Container>
      <CommentsList postId={props.postId} />
      <CommentForm postId={props.postId} />
    </S.Container>
  );
}
