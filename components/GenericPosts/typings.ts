import { GetPostsByTagQuery, GetPostsQuery } from "@/typings/wp";

type PostsLoader = ({
  pageParam,
}: any) => Promise<GetPostsQuery | GetPostsByTagQuery>;
export type TGenericPostsProps = {
  initialData?: any;
  uniqueKey: string;
  loader: PostsLoader;
};
