import { gql } from "graphql-request";

export const GET_LATEST_COMMENTS_Q = gql`
  query GetLatestComments {
    comments {
      nodes {
        id
        date
        author {
          node {
            name
          }
        }
        commentedOn {
          node {
            ... on Post {
              id
              title
              slug
            }
          }
        }
      }
    }
  }
`;
