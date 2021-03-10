import Head from "next/head";
import { useInfiniteQuery } from "react-query";
import { gqlClient } from "../../network/gqlClient";
import { GET_POSTS_QUERY } from "../../network/queries/get-posts";
import Link from "next/link";
import { Fragment } from "react";
import Post from "./Post";
import * as S from "./styled";

export default function HomeScreen(props) {
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
            <S.Container>
              {data.pages.map((page, idx) => (
                <Fragment key={idx}>
                  {page.posts.nodes.map((post) => (
                    <Post key={post.date} data={post} />
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
