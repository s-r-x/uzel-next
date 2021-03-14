import { gql } from "graphql-request";
import { PAGE_INFO_FIELDS_FRAG } from "../fragments/page-info-fields";
import { POSTS_LIST_FIELDS_FRAG } from "../fragments/posts-list-fields";
export const GET_POSTS_BY_TAG_Q = gql`
  ${POSTS_LIST_FIELDS_FRAG}
  ${PAGE_INFO_FIELDS_FRAG}
  query GetPostsByTag($tag: String!, $first: Int, $after: String) {
    posts(where: { tag: $tag }, first: $first, after: $after) {
      nodes {
        ...PostsListFields
      }
      pageInfo {
        ...PageInfoFields
      }
    }
  }
`;
