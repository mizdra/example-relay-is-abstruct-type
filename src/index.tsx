import { graphql } from 'react-relay';

graphql`
  query src_HomeQuery @raw_response_type {
    node {
      __typename
      ... on Node {
        id
      }
    }
    search(query: "foo") {
      __typename
      ... on SearchResult {
        __typename
      }
    }
  }
`;
