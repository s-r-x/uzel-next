import { gql } from "graphql-request";
import { PAGE_INFO_FIELDS_FRAG } from "../fragments/page-info-fields";
import { POSTS_LIST_FIELDS_FRAG } from "../fragments/posts-list-fields";

export const GET_POSTS_QUERY = gql`
  ${POSTS_LIST_FIELDS_FRAG}
  ${PAGE_INFO_FIELDS_FRAG}
  query GetPosts($first: Int, $after: String) {
    posts(first: $first, after: $after) {
      nodes {
        ...PostsListFields
      }
      pageInfo {
        ...PageInfoFields
      }
    }
  }
`;
