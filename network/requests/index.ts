import {
  GetPostBySlugQuery,
  GetPostBySlugQueryVariables,
  GetPostsQuery,
  GetPostsQueryVariables,
} from "@/typings/wp";
import { gqlClient } from "../gqlClient";
import { GET_POST_BY_SLUG } from "../queries/get-post-by-slug";
import { GET_POSTS_QUERY } from "../queries/get-posts";

export const Requests = {
  getPosts(vars?: GetPostsQueryVariables): Promise<GetPostsQuery> {
    return gqlClient.request(GET_POSTS_QUERY, {
      first: 10,
      ...vars,
    });
  },
  getPostBySlug(
    vars: GetPostBySlugQueryVariables
  ): Promise<GetPostBySlugQuery> {
    return gqlClient.request(GET_POST_BY_SLUG, vars);
  },
};
