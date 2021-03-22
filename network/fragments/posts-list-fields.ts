import { gql } from "graphql-request";

export const POSTS_LIST_FIELDS_FRAG = gql`
  fragment PostsListFields on Post {
    id
    date
    title
    slug
    excerpt
    commentCount
    likesCount
    featuredImage {
      node {
        mediaItemUrl
        mediaDetails {
          width
          height
        }
      }
    }
  }
`;
