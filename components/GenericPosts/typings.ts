import {
  GetPostsByTagQuery,
  GetPostsQuery,
  SearchPostsByTermQuery,
} from "@/typings/wp";

type PostsLoader = ({
  pageParam,
}: any) => Promise<GetPostsQuery | GetPostsByTagQuery | SearchPostsByTermQuery>;
export type TGenericPostsProps = {
  initialData?: any;
  uniqueKey: string;
  loader: PostsLoader;
};
