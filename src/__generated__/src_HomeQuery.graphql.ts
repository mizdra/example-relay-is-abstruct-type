/**
 * @generated SignedSource<<2d6f544d03c8342b121a625d34cf809e>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type src_HomeQuery$variables = {};
export type src_HomeQuery$data = {
  readonly node: {
    readonly __typename: string;
    readonly id: string;
  };
  readonly search: ReadonlyArray<{
    readonly __typename: string;
  }>;
};
export type src_HomeQuery$rawResponse = {
  readonly node: {
    readonly __typename: string;
    readonly __isNode: string;
    readonly id: string;
  };
  readonly search: ReadonlyArray<{
    readonly __typename: string;
    readonly __isNode: string;
    readonly __isSearchResult: string;
    readonly id: string;
  }>;
};
export type src_HomeQuery = {
  rawResponse: src_HomeQuery$rawResponse;
  response: src_HomeQuery$data;
  variables: src_HomeQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "__typename",
  "storageKey": null
},
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v2 = [
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
    "name": "src_HomeQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": null,
        "kind": "LinkedField",
        "name": "node",
        "plural": false,
        "selections": [
          (v0/*: any*/),
          (v1/*: any*/)
        ],
        "storageKey": null
      },
      {
        "alias": null,
        "args": (v2/*: any*/),
        "concreteType": null,
        "kind": "LinkedField",
        "name": "search",
        "plural": true,
        "selections": [
          (v0/*: any*/)
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
    "name": "src_HomeQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": null,
        "kind": "LinkedField",
        "name": "node",
        "plural": false,
        "selections": [
          (v0/*: any*/),
          {
            "kind": "TypeDiscriminator",
            "abstractKey": "__isNode"
          },
          (v1/*: any*/)
        ],
        "storageKey": null
      },
      {
        "alias": null,
        "args": (v2/*: any*/),
        "concreteType": null,
        "kind": "LinkedField",
        "name": "search",
        "plural": true,
        "selections": [
          (v0/*: any*/),
          {
            "kind": "TypeDiscriminator",
            "abstractKey": "__isSearchResult"
          },
          {
            "kind": "InlineFragment",
            "selections": [
              (v1/*: any*/)
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
    "cacheID": "b5e08ed46c45ec7df3c8d32f3148cc6a",
    "id": null,
    "metadata": {},
    "name": "src_HomeQuery",
    "operationKind": "query",
    "text": "query src_HomeQuery {\n  node {\n    __typename\n    __isNode: __typename\n    id\n  }\n  search(query: \"foo\") {\n    __typename\n    __isSearchResult: __typename\n    ... on Node {\n      __isNode: __typename\n      id\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "ae2daf96fb8211f974b1606f5fb32233";

export default node;
