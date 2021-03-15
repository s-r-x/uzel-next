import { PaginateConfig } from "@/config/paginate";
import {
  GetPostBySlugQuery,
  GetPostBySlugQueryVariables,
  GetPostsByTagQuery,
  GetPostsByTagQueryVariables,
  GetPostsQuery,
  GetPostsQueryVariables,
  GetTagsQuery,
  GetTagsQueryVariables,
} from "@/typings/wp";
import { gqlClient } from "../gqlClient";
import { GET_POST_BY_SLUG_Q } from "../queries/get-post-by-slug";
import { GET_POSTS_Q } from "../queries/get-posts";
import { GET_POSTS_BY_TAG_Q } from "../queries/get-posts-by-tag";
import { GET_TAGS_Q } from "../queries/get-tags";

export const Requests = {
  getTags(vars?: GetTagsQueryVariables): Promise<GetTagsQuery> {
    return gqlClient.request(GET_TAGS_Q, {
      last: PaginateConfig.tagsPerPage,
      ...vars,
    });
  },
  getPosts(vars?: GetPostsQueryVariables): Promise<GetPostsQuery> {
    return gqlClient.request(GET_POSTS_Q, {
      first: PaginateConfig.defaultPerPage,
      ...vars,
    });
  },
  getPostBySlug(
    vars: GetPostBySlugQueryVariables
  ): Promise<GetPostBySlugQuery> {
    return gqlClient.request(GET_POST_BY_SLUG_Q, vars);
  },
  getPostsByTag(
    vars: GetPostsByTagQueryVariables
  ): Promise<GetPostsByTagQuery> {
    return gqlClient.request(GET_POSTS_BY_TAG_Q, {
      ...vars,
      first: PaginateConfig.defaultPerPage,
    });
  },
};
