import { Requests } from "@/network/requests";
import { useQuery } from "react-query";
import * as S from "./styled";
import Comment from "./Comment";
import Spin from "@/components/Spin";
import { commentsListTransition } from "./motion";
import { QueryKeysConfig } from "@/config/query-keys";

export default function AppMenuCommentsSection() {
  const { isLoading, data } = useQuery(
    QueryKeysConfig.latestComments,
    () => Requests.getLatestComments(),
    {
      refetchOnWindowFocus: false,
      refetchOnMount: false,
    }
  );
  if (isLoading) {
    return (
      <Spin
        css={`
          margin: auto;
          --sk-size: 80px;
        `}
      />
    );
  }
  return (
    <S.Container>
      <S.CommentsList
        transition={commentsListTransition}
        animate="animate"
        exit="exit"
        initial="initial"
      >
        {data.comments.nodes.map((comment) => (
          <Comment comment={comment} key={comment.id} />
        ))}
      </S.CommentsList>
    </S.Container>
  );
}
