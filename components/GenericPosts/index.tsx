import * as S from "./styled";
import PostsLoader from "./Loader";
import PostsList from "./PostsList";
import { TGenericPostsProps } from "./typings";
import { useInfiniteQuery } from "react-query";

export default function GenericPosts(props: TGenericPostsProps) {
  const {
    data,
    isLoading,
    isFetching,
    fetchNextPage,
    hasNextPage,
  } = useInfiniteQuery(props.queryKey, props.loader, {
    getNextPageParam: (lastPage) => lastPage?.posts?.pageInfo?.endCursor,
    enabled: props.isEnabled,
    initialData: { pages: [props.initialData], pageParams: undefined },
    refetchOnWindowFocus: false,
  });
  return (
    <>
      {isLoading ? (
        <div>loading</div>
      ) : (
        <S.Container>
          <PostsList pages={data.pages} />
          <PostsLoader
            hasMore={hasNextPage}
            fetchMore={fetchNextPage}
            isFetching={isFetching}
          />
        </S.Container>
      )}
    </>
  );
}
