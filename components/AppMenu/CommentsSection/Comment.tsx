import { useFormattedDate } from "@/hooks/useFormattedDate";
import { GetLatestCommentsQuery } from "@/typings/wp";
import * as S from "./styled";
import Link from "next/link";
type TProps = {
  comment: GetLatestCommentsQuery["comments"]["nodes"][0];
};
export default function Comment({ comment }: TProps) {
  const date = useFormattedDate(comment.date);
  comment.commentedOn.node.__typename = "Post";
  return (
    <S.Comment>
      <time dateTime={comment.date}>{date}</time>
      {comment.commentedOn.node.__typename === "Post" && (
        <Link href={`/post/${comment.commentedOn.node.slug}`}>
          {comment.commentedOn.node.title}
        </Link>
      )}
      <span>{comment.author.node.name}</span>
    </S.Comment>
  );
}
