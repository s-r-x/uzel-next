import { gql } from "graphql-request";

export const CREATE_COMMENT_M = gql`
  mutation CreateComment(
    $name: String!
    $email: String!
    $comment: String!
    $postId: Int!
    $parent: ID
  ) {
    createComment(
      input: {
        author: $name
        authorEmail: $email
        commentOn: $postId
        content: $comment
        parent: $parent
      }
    ) {
      clientMutationId
    }
  }
`;
