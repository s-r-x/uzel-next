import { Requests } from "@/network/requests";
import { useQuery } from "react-query";
import { List } from "react-content-loader";
import * as S from "./styled";
import Link from "next/link";

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
  } else {
    return (
      <S.TagsList>
        {data.tags.nodes.map((tag) => (
          <li key={tag.slug}>
            <Link href={`/tag/${tag.slug}`} prefetch={false}>
              <a>
                <span>{tag.name}</span> (<strong>{tag.count}</strong>)
              </a>
            </Link>
          </li>
        ))}
      </S.TagsList>
    );
  }
}
