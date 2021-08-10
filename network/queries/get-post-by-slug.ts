import { gql } from "graphql-request";

export const GET_POST_BY_SLUG_Q = gql`
  query GetPostBySlug($slug: ID!) {
    post(id: $slug, idType: SLUG) {
      postId
      title
      date
      excerpt
      modified
      slug
      content
      likesCount
      commentCount
      categories(first: 1) {
        nodes {
          name
        }
      }
      tags {
        nodes {
          name
          id
          slug
        }
      }
      iNaturalist {
        observations
      }
      featuredImage {
        node {
          altText
          mediaItemUrl
          mediaDetails {
            width
            height
          }
        }
      }
    }
  }
`;
