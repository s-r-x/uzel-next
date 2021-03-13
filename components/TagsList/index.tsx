import * as S from "./styled";
import Link from "next/link";

type TProps = {
  className?: string;
  tags: any[];
};
export default function TagsList(props: TProps) {
  return (
    <S.Container className={props.className}>
      {props.tags.map(({ name, slug, id }) => (
        <Link href={`/tag/${slug}`} passHref>
          <S.Tag key={id}>#{name}</S.Tag>
        </Link>
      ))}
    </S.Container>
  );
}
