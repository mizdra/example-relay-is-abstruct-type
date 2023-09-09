/**
 * @generated SignedSource<<65c802fd796c6cc547280c5ce6f7e1e0>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type case2_Query$variables = {};
export type case2_Query$data = {
  readonly node: {
    readonly __typename: string;
    readonly id: string;
  } | null;
  readonly search: ReadonlyArray<{
    readonly __typename: string;
  }>;
};
export type case2_Query$rawResponse = {
  readonly node: {
    readonly __typename: string;
    readonly __isNode: string;
    readonly id: string;
  } | null;
  readonly search: ReadonlyArray<{
    readonly __typename: string;
    readonly __isNode: string;
    readonly __isSearchResult: string;
    readonly id: string;
  }>;
};
export type case2_Query = {
  rawResponse: case2_Query$rawResponse;
  response: case2_Query$data;
  variables: case2_Query$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "kind": "Literal",
    "name": "id",
    "value": "1"
  }
],
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "__typename",
  "storageKey": null
},
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v3 = [
  {
    "kind": "Literal",
    "name": "query",
    "value": "foo"
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "case2_Query",
    "selections": [
      {
        "alias": null,
        "args": (v0/*: any*/),
        "concreteType": null,
        "kind": "LinkedField",
        "name": "node",
        "plural": false,
        "selections": [
          (v1/*: any*/),
          (v2/*: any*/)
        ],
        "storageKey": "node(id:\"1\")"
      },
      {
        "alias": null,
        "args": (v3/*: any*/),
        "concreteType": null,
        "kind": "LinkedField",
        "name": "search",
        "plural": true,
        "selections": [
          (v1/*: any*/)
        ],
        "storageKey": "search(query:\"foo\")"
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "case2_Query",
    "selections": [
      {
        "alias": null,
        "args": (v0/*: any*/),
        "concreteType": null,
        "kind": "LinkedField",
        "name": "node",
        "plural": false,
        "selections": [
          (v1/*: any*/),
          {
            "kind": "TypeDiscriminator",
            "abstractKey": "__isNode"
          },
          (v2/*: any*/)
        ],
        "storageKey": "node(id:\"1\")"
      },
      {
        "alias": null,
        "args": (v3/*: any*/),
        "concreteType": null,
        "kind": "LinkedField",
        "name": "search",
        "plural": true,
        "selections": [
          (v1/*: any*/),
          {
            "kind": "TypeDiscriminator",
            "abstractKey": "__isSearchResult"
          },
          {
            "kind": "InlineFragment",
            "selections": [
              (v2/*: any*/)
            ],
            "type": "Node",
            "abstractKey": "__isNode"
          }
        ],
        "storageKey": "search(query:\"foo\")"
      }
    ]
  },
  "params": {
    "cacheID": "3f633d305abce8490bff19cb02d3c298",
    "id": null,
    "metadata": {},
    "name": "case2_Query",
    "operationKind": "query",
    "text": "query case2_Query {\n  node(id: \"1\") {\n    __typename\n    __isNode: __typename\n    id\n  }\n  search(query: \"foo\") {\n    __typename\n    __isSearchResult: __typename\n    ... on Node {\n      __isNode: __typename\n      id\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "958ce31597b5d962ae4b6c0053fc348c";

export default node;
