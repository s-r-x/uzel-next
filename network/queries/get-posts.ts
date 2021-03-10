import { gql } from "graphql-request";

export const GET_POSTS_QUERY = gql`
  query MyQuery($first: Int, $after: String) {
    posts(first: $first, after: $after) {
      nodes {
        id
        date
        title
        excerpt
        commentCount
        tags {
          nodes {
            name
            id
          }
        }
        featuredImage {
          node {
            mediaItemUrl
          }
        }
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
