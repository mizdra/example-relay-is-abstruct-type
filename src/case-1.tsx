import { graphql } from 'react-relay';
import { type case1_Query$rawResponse } from './__generated__/case1_Query.graphql.js';
import { BookFactory } from './factory.js';

graphql`
  query case1_Query @raw_response_type {
    book(id: "1") {
      __typename
      title
    }
  }
`;

// Define a dummy response with graphql-fabbrica.
const dummyResponse: case1_Query$rawResponse = {
  book: await BookFactory.build(),
};
