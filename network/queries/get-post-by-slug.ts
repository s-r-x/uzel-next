import { gql } from "graphql-request";

export const GET_POST_BY_SLUG = gql`
  query PostBySlugQuery($slug: ID!) {
    post(id: $slug, idType: SLUG) {
      title   
    }
  }
`;
