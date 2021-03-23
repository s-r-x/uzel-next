import { gql } from "graphql-request";

export const CREATE_COMMENT_M = gql`
  mutation CreateComment(
    $name: String!
    $email: String!
    $comment: String!
    $postId: Int!
  ) {
    createComment(
      input: {
        author: $name
        authorEmail: $email
        commentOn: $postId
        content: $comment
      }
    ) {
      clientMutationId
    }
  }
`;
