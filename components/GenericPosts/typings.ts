import {
  GetPostsByTagQuery,
  GetPostsQuery,
  SearchPostsByTermQuery,
} from "@/typings/wp";
import { QueryKey } from "react-query";

export type TGenericPostsQuery =
  | GetPostsQuery
  | GetPostsByTagQuery
  | SearchPostsByTermQuery;
type PostsLoader = ({ pageParam }: any) => Promise<TGenericPostsQuery>;
export type TGenericPostsProps = {
  initialData?: TGenericPostsQuery;
  queryKey: QueryKey;
  isEnabled?: boolean;
  loader: PostsLoader;
};
export type TGenericPost = TGenericPostsQuery["posts"]["nodes"][0];
