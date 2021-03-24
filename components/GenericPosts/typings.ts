import {
  GetPostsByTagQuery,
  GetPostsQuery,
  SearchPostsByTermQuery,
} from "@/typings/wp";

export type TGenericPostsQuery =
  | GetPostsQuery
  | GetPostsByTagQuery
  | SearchPostsByTermQuery;
type PostsLoader = ({ pageParam }: any) => Promise<TGenericPostsQuery>;
export type TGenericPostsProps = {
  initialData?: TGenericPostsQuery;
  uniqueKey: string;
  loader: PostsLoader;
};
export type TGenericPost = TGenericPostsQuery["posts"]["nodes"][0];
