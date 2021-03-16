import { Requests } from "@/network/requests";
import { useQuery } from "react-query";
import { List } from "react-content-loader";
import * as S from "./styled";
import Comment from "./Comment";
export default function AppMenuCommentsSection() {
  const { isLoading, data } = useQuery(
    "latest-comments",
    () => Requests.getLatestComments(),
    {
      refetchOnWindowFocus: false,
      refetchOnMount: false,
    }
  );
  if (isLoading) {
    return <List />;
  }
  return (
    <S.CommentsList>
      {data.comments.nodes.map((comment) => (
        <Comment comment={comment} key={comment.id} />
      ))}
    </S.CommentsList>
  );
}
