import { Requests } from "@/network/requests";
import { useQuery } from "react-query";
import * as S from "./styled";
import Link from "next/link";
import { tagsListTransition, tagTransition, tagVariants } from "./motion";
import Spin from "@/components/Spin";
import { LinkBuilder } from "@/services/link-builder";

export default function AppMenuTagsSection() {
  const { isLoading, data } = useQuery("tags", () => Requests.getTags(), {
    refetchOnWindowFocus: false,
    refetchOnMount: false,
  });
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
    <S.TagsList
      transition={tagsListTransition}
      animate="animate"
      exit="exit"
      initial="initial"
    >
      {data.tags.nodes.map((tag) => (
        <S.Tag transition={tagTransition} variants={tagVariants} key={tag.slug}>
          <Link
            href={LinkBuilder.build("tag", {
              slug: tag.slug,
            })}
            prefetch={false}
          >
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
