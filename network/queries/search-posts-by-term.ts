import { gql } from "graphql-request";
import { PAGE_INFO_FIELDS_FRAG } from "../fragments/page-info-fields";
import { POSTS_LIST_FIELDS_FRAG } from "../fragments/posts-list-fields";

export const SEARCH_POSTS_BY_TERM_Q = gql`
  ${POSTS_LIST_FIELDS_FRAG}
  ${PAGE_INFO_FIELDS_FRAG}
  query SearchPostsByTerm($first: Int, $after: String, $term: String) {
    posts(where: { search: $term }, first: $first, after: $after) {
      nodes {
        ...PostsListFields
      }
      pageInfo {
        ...PageInfoFields
      }
    }
  }
`;
