import { gql } from "graphql-request";

export const POSTS_LIST_FIELDS_FRAGMENT = gql`
  fragment PostsListFields on Post {
    id
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
        mediaItemUrl
      }
    }
  }
`;
