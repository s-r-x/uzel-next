import { gql } from "graphql-request";

export const GET_TAGS_Q = gql`
  query GetTags($last: Int) {
    tags(where: { orderby: COUNT, hideEmpty: true }, last: $last) {
      nodes {
        name
        count
        slug
      }
    }
  }
`;
