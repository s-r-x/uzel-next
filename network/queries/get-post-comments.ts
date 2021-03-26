import { gql } from "graphql-request";

export const GET_POST_COMMENTS_Q = gql`
  query GetPostComments($postId: ID!) {
    comments(where: { contentId: $postId, contentType: POST }) {
      nodes {
        content
        parentDatabaseId
        databaseId
        date
        author {
          node {
            name
            ... on User {
              id
              avatar {
                url
                size
              }
            }
          }
        }
      }
    }
  }
`;
