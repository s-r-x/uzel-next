import CommentForm from "./CommentForm";
import * as S from "./styled";

type TProps = {
  postId: number;
}
export default function PostCommentsSection(props: TProps) {
  return (
    <S.Container>
      <div>comments</div>
      <CommentForm postId={props.postId} />
    </S.Container>
  );
}
