import TagsList from "@/components/TagsList";
import { GetPostBySlugQuery } from "@/typings/wp";
import { useFormattedDate } from "@/hooks/useFormattedDate";
import * as S from "./styled";
import { titleTransition, letterVariants, letterTransition } from "./motion";
import Image from "_c/Image";
import { useSplitText } from "@/hooks/useSplitText";
import { Fragment } from "react";
import { useConvertContentToJsx } from "./hooks";

type TProps = {
  data: GetPostBySlugQuery;
};
export default function PostScreen({ data: { post } }: TProps) {
  const date = useFormattedDate(post.date);
  const title = useSplitText(post.title);
  const Content = useConvertContentToJsx(post.content);
  return (
    <>
      <S.Container>
        <S.Header>
          <S.Title
            transition={titleTransition}
            animate="animate"
            exit="exit"
            initial="initial"
          >
            {title.map((word, idx) => (
              <Fragment key={idx}>
                <S.TitleWord>
                  {word.map((letter, idx) => (
                    <S.TitleLetter
                      transition={letterTransition}
                      variants={letterVariants}
                      key={idx}
                    >
                      {letter}
                    </S.TitleLetter>
                  ))}
                </S.TitleWord>{" "}
              </Fragment>
            ))}
          </S.Title>
          <S.Date dateTime={post.date}>{date}</S.Date>
        </S.Header>
        <div
          css={`
            text-align: center;
          `}
        >
          <Image
            width={post.featuredImage.node.mediaDetails.width}
            height={post.featuredImage.node.mediaDetails.height}
            src={post.featuredImage.node.mediaItemUrl}
            altText={post.featuredImage.node.altText}
          />
        </div>
        {Content}
        <TagsList tags={post.tags.nodes} />
      </S.Container>
    </>
  );
}
