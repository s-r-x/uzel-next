import Spin from "@/components/Spin";
import { Requests } from "@/network/requests";
import { useQuery } from "react-query";
import { useCommentsCount, useHierarchicalComments } from "./hooks";
import * as S from "./styled";
import Comment from "./Comment";
import { QueryKeysConfig } from "@/config/query-keys";

type TProps = {
  postId: number;
};
export default function CommentsList(props: TProps) {
  const { data, isLoading } = useQuery(
    [QueryKeysConfig.postComments, props.postId],
    () =>
      Requests.getPostComments({
        postId: String(props.postId),
      }),
    {
      refetchOnWindowFocus: false,
    }
  );
  const comments = useHierarchicalComments(data?.comments?.nodes);
  const count = useCommentsCount(data?.comments?.nodes);
  return (
    <S.Container>
      <S.CommentsCount>{count}</S.CommentsCount>
      {isLoading ? (
        <Spin
          css={`
            margin: 0 auto;
          `}
        />
      ) : (
        <ul>
          {comments.map((comment) => (
            <Comment key={comment.databaseId} comment={comment} />
          ))}
        </ul>
      )}
    </S.Container>
  );
}
