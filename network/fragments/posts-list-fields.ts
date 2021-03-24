import { gql } from "graphql-request";

export const POSTS_LIST_FIELDS_FRAG = gql`
  fragment PostsListFields on Post {
    postId
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
        altText
        mediaItemUrl
        mediaDetails {
          width
          height
        }
      }
    }
  }
`;
