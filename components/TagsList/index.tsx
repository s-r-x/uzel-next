import * as S from "./styled";
import Link from "next/link";
import { Tag } from "@/typings/wp";

type TProps = {
  className?: string;
  tags: Pick<Tag, "name" | "id" | "slug">[];
};
export default function TagsList(props: TProps) {
  return (
    <S.Container className={props.className}>
      {props.tags.map(({ name, slug, id }) => (
        <Link prefetch={false} key={id} href={`/tag/${slug}`} passHref>
          <S.Tag>#{name}</S.Tag>
        </Link>
      ))}
    </S.Container>
  );
}
