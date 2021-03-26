import CommentForm from "./CommentForm";
import CommentsList from "./CommentsList";
import { useResetCommentFormStore } from "./hooks";
import * as S from "./styled";

type TProps = {
  postId: number;
};
export default function PostCommentsSection(props: TProps) {
  useResetCommentFormStore(props.postId);
  return (
    <S.Container>
      <CommentsList postId={props.postId} />
      <CommentForm postId={props.postId} />
    </S.Container>
  );
}
