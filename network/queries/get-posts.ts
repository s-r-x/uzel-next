import { gql } from "graphql-request";
import { POSTS_LIST_FIELDS_FRAGMENT } from "../fragments/posts-list-fields";

export const GET_POSTS_QUERY = gql`
  ${POSTS_LIST_FIELDS_FRAGMENT}
  query GetPosts($first: Int, $after: String) {
    posts(first: $first, after: $after) {
      nodes {
        ...PostsListFields
      }
      pageInfo {
        endCursor
        hasNextPage
        hasPreviousPage
        startCursor
      }
    }
  }
`;
