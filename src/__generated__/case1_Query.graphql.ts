/**
 * @generated SignedSource<<e880e94481a2b658e3cb3e302a41563f>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type case1_Query$variables = {};
export type case1_Query$data = {
  readonly book: {
    readonly __typename: "Book";
    readonly title: string;
  } | null;
};
export type case1_Query$rawResponse = {
  readonly book: {
    readonly __typename: "Book";
    readonly id: string;
    readonly title: string;
  } | null;
};
export type case1_Query = {
  rawResponse: case1_Query$rawResponse;
  response: case1_Query$data;
  variables: case1_Query$variables;
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
  "name": "title",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "case1_Query",
    "selections": [
      {
        "alias": null,
        "args": (v0/*: any*/),
        "concreteType": "Book",
        "kind": "LinkedField",
        "name": "book",
        "plural": false,
        "selections": [
          (v1/*: any*/),
          (v2/*: any*/)
        ],
        "storageKey": "book(id:\"1\")"
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "case1_Query",
    "selections": [
      {
        "alias": null,
        "args": (v0/*: any*/),
        "concreteType": "Book",
        "kind": "LinkedField",
        "name": "book",
        "plural": false,
        "selections": [
          (v1/*: any*/),
          (v2/*: any*/),
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "id",
            "storageKey": null
          }
        ],
        "storageKey": "book(id:\"1\")"
      }
    ]
  },
  "params": {
    "cacheID": "3cf09e01847fef6406b184f7852a45b3",
    "id": null,
    "metadata": {},
    "name": "case1_Query",
    "operationKind": "query",
    "text": "query case1_Query {\n  book(id: \"1\") {\n    __typename\n    title\n    id\n  }\n}\n"
  }
};
})();

(node as any).hash = "eb6dc71bb86639e432632152c51feb7c";

export default node;
