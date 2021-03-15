import { INaturalistConfig } from "@/config/i-naturalist";
import { PaginateConfig } from "@/config/paginate";
import { TGetLastObservationsRes } from "@/typings/i-nat";
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
import { gqlClient } from "../gql-client";
import { httpClient } from "../http-client";
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
  async getLatestObservations(): Promise<TGetLastObservationsRes[]> {
    const params = new URLSearchParams({
      user_id: INaturalistConfig.userId,
      per_page: String(PaginateConfig.observationsPerPage),
      page: "1",
      order_by: "observed_on",
      locale: "ru",
    });
    const data = await httpClient(
      INaturalistConfig.obervationsUrl + "?" + params
    );
    const json = await data.json();
    return json.results.map((r: any) => ({
      name: r.taxon?.preferred_common_name ?? "Неизвестно",
      date: r.time_observed_at,
      //thumb: r.taxon.default_photo.square_url,
      thumb: r.photos?.[0]?.url,
      id: r.id,
    }));
    return data.json();
  },
};
