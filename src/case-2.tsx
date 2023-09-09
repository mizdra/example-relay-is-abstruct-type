import { graphql } from 'react-relay';
import { type case2_Query$rawResponse } from './__generated__/case2_Query.graphql.js';
import { BookFactory } from './factory.js';

graphql`
  query case2_Query @raw_response_type {
    node(id: "1") {
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

// Define a dummy response with graphql-fabbrica.
const dummyResponse: case2_Query$rawResponse = {
  node: await BookFactory.build(),
  search: [await BookFactory.build()],
};
