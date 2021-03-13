export type TGenericPostsUniqueKey = "home" | "tags" | "categories";
export type TGenericPostsProps = {
  fetchMore: Function;
  hasMore: boolean;
  isLoading: boolean;
  isFetching: boolean;
  data: any;
  uniqueKey: TGenericPostsUniqueKey;
};
