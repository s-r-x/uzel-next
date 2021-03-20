import { Requests } from "@/network/requests";
import { useQuery } from "react-query";
import { List } from "react-content-loader";
import * as S from "./styled";
import Link from "next/link";
import { tagsListTransition, tagTransition, tagVariants } from "./motion";

export default function AppMenuTagsSection() {
  const { isLoading, isFetching, data } = useQuery(
    "tags",
    () => Requests.getTags(),
    {
      refetchOnWindowFocus: false,
      refetchOnMount: false,
    }
  );
  if (isLoading) {
    return <List />;
  }

  return (
    <S.TagsList
      transition={tagsListTransition}
      animate="animate"
      exit="exit"
      initial="initial"
    >
      {data.tags.nodes.map((tag) => (
        <S.Tag transition={tagTransition} variants={tagVariants} key={tag.slug}>
          <Link href={`/tag/${tag.slug}`} prefetch={false}>
            <a>
              <span>{tag.name}</span>
              <strong>{tag.count}</strong>
            </a>
          </Link>
        </S.Tag>
      ))}
    </S.TagsList>
  );
}
