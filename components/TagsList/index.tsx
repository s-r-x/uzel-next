import * as S from "./styled";
import Link from "next/link";
import { Tag } from "@/typings/wp";
import { LinkBuilder } from "@/services/link-builder";
import { memo } from "react";

type TProps = {
  className?: string;
  tags: Pick<Tag, "name" | "id" | "slug">[];
};
const TagsList = (props: TProps) => {
  return (
    <S.Container className={props.className}>
      {props.tags.map(({ name, slug, id }) => (
        <li key={id}>
          <Link
            prefetch={false}
            href={LinkBuilder.build("tag", {
              slug,
            })}
          >
            <a>#{name}</a>
          </Link>
        </li>
      ))}
    </S.Container>
  );
};
export default memo(TagsList);
