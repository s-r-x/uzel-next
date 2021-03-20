import { useFormattedDate } from "@/hooks/useFormattedDate";
import { GetLatestCommentsQuery } from "@/typings/wp";
import * as S from "./styled";
import Link from "next/link";
import { useStripHtml } from "@/hooks/useStripHtml";
import { commentTransition, commentVariants } from "./motion";
type TProps = {
  comment: GetLatestCommentsQuery["comments"]["nodes"][0];
};
export default function Comment({ comment }: TProps) {
  const date = useFormattedDate(comment.date);
  const content = useStripHtml(comment.content);
  comment.commentedOn.node.__typename = "Post";
  return (
    <S.Comment transition={commentTransition} variants={commentVariants}>
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
        dateTime={comment.date}
      >
        {date}
      </time>
      <p
        css={`
          margin: 0;
          margin-top: 10px;
        `}
      >
        {content}
      </p>
      <div
        css={`
          margin-top: 20px;
          align-self: flex-end;
          a {
            font-weight: 900;
          }
        `}
      >
        {comment.commentedOn.node.__typename === "Post" && (
          <Link href={`/post/${comment.commentedOn.node.slug}`}>
            {comment.commentedOn.node.title}
          </Link>
        )}
      </div>
    </S.Comment>
  );
}
