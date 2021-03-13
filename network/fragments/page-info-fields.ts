import { gql } from "graphql-request";

export const PAGE_INFO_FIELDS_FRAG = gql`
  fragment PageInfoFields on WPPageInfo {
    endCursor
    hasNextPage
    hasPreviousPage
    startCursor
  }
`;
