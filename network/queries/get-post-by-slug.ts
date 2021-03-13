import { gql } from "graphql-request";

export const GET_POST_BY_SLUG = gql`
  query PostBySlugQuery($slug: ID!) {
    post(id: $slug, idType: SLUG) {
      title
      date
      content
      tags {
        nodes {
          name
          id
          slug
        }
      }
      featuredImage {
        node {
          altText
          mediaItemUrl
        }
      }
    }
  }
`;
