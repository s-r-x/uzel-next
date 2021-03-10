import Head from "next/head";
import { useInfiniteQuery } from "react-query";
import { gqlClient } from "../../network/gqlClient";
import { GET_POSTS_QUERY } from "../../network/queries/get-posts";
import { Fragment, useEffect, useRef, useState } from "react";
import Post from "./Post";
import * as S from "./styled";
import ResizeObserver from "resize-observer-polyfill";

export default function HomeScreen(props) {
  const [dragConstraint, setDragConstraint] = useState(0);
  const containerRef = useRef<HTMLDivElement>();
  const { data, isLoading } = useInfiniteQuery(
    "posts",
    () =>
      gqlClient.request(GET_POSTS_QUERY, {
        first: 20,
      }),
    {
      enabled: true,
      initialData: props.data,
    }
  );
  useEffect(() => {
    setDragConstraint(containerRef.current.scrollWidth - window.innerWidth);
  }, []);
  return (
    <>
      <Head>
        <title>home page</title>
      </Head>
      <>
        {isLoading ? (
          <div>loading</div>
        ) : (
          <>
            <S.Container
              dragConstraints={{ right: 0, left: -dragConstraint }}
              drag="x"
              ref={containerRef}
            >
              {data.pages.map((page, idx) => (
                <Fragment key={idx}>
                  {page.posts.nodes.map((post) => (
                    <Post key={post.id} data={post} />
                  ))}
                </Fragment>
              ))}
            </S.Container>
          </>
        )}
      </>
    </>
  );
}
