import { gql } from "graphql-request";

export const GET_POSTS_QUERY = gql`
  query PostsQuery($first: Int, $after: String) {
    posts(first: $first, after: $after) {
      nodes {
        id
        date
        title
        slug
        excerpt
        commentCount
        likesCount
        tags {
          nodes {
            name
            id
            slug
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
