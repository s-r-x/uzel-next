import { useFormattedDate } from "@/hooks/useFormattedDate";
import { useStripHtml } from "@/hooks/useStripHtml";
import isempty from "lodash/isEmpty";
import { memo } from "react";
import { THierarchicalComment } from "./typings";
import * as S from "./styled";
import { useAuthorAvatar } from "./hooks";
import { CommentIcon } from "_c/Icon";
import { useCommentFormStore } from "../hooks";

type TProps = {
  comment: THierarchicalComment;
};
const Comment = ({ comment }: TProps) => {
  const changeRespondTarget = useCommentFormStore(
    (state) => state.changeRespondTarget
  );
  const content = useStripHtml(comment.content);
  const date = useFormattedDate(comment.date);
  const avatar = useAuthorAvatar(comment);
  const onRespondClick = () => {
    changeRespondTarget({
      commentId: comment.databaseId,
      authorName: comment.author.node.name,
      avatar,
    });
    (document.querySelector("#comment-form_message") as HTMLElement).focus();
  };
  return (
    <S.Comment>
      <div
        css={`
          padding: 7px;
          padding-left: 0;
        `}
      >
        <div
          css={`
            display: flex;
          `}
        >
          <S.Avatar src={avatar} />
          <div
            css={`
              display: flex;
              flex-direction: column;
              margin-left: 10px;
            `}
          >
            <span
              css={`
                font-weight: 900;
              `}
            >
              {comment.author.node.name}
            </span>
            <time
              css={`
                font-size: 14px;
              `}
            >
              {date}
            </time>
          </div>
        </div>
        <p>{content}</p>
        <S.RespondButton onClick={onRespondClick}>
          <CommentIcon />
          <span>Ответить</span>
        </S.RespondButton>
      </div>
      {!isempty(comment.children) && (
        <ul>
          {comment.children.map((comment) => (
            <Comment comment={comment} key={comment.databaseId} />
          ))}
        </ul>
      )}
    </S.Comment>
  );
};

export default memo(Comment);
