/**
 * @generated SignedSource<<ac64817cd0c752d34eb7249571f996e4>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type src_AQuery$variables = {};
export type src_AQuery$data = {
  readonly hasField0: {
    readonly __typename: string;
    readonly id?: string;
  };
  readonly node: {
    readonly __typename: string;
    readonly field0?: number;
  };
};
export type src_AQuery$rawResponse = {
  readonly hasField0: {
    readonly __typename: string;
    readonly __isNode: string;
    readonly id: string;
  };
  readonly node: {
    readonly __typename: string;
    readonly __isHasField0: string;
    readonly field0: number;
    readonly id: string;
  };
};
export type src_AQuery = {
  rawResponse: src_AQuery$rawResponse;
  response: src_AQuery$data;
  variables: src_AQuery$variables;
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
  "kind": "InlineFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "field0",
      "storageKey": null
    }
  ],
  "type": "HasField0",
  "abstractKey": "__isHasField0"
},
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "concreteType": null,
  "kind": "LinkedField",
  "name": "hasField0",
  "plural": false,
  "selections": [
    (v0/*: any*/),
    {
      "kind": "InlineFragment",
      "selections": [
        (v2/*: any*/)
      ],
      "type": "Node",
      "abstractKey": "__isNode"
    }
  ],
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "src_AQuery",
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
      (v3/*: any*/)
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "src_AQuery",
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
          (v1/*: any*/),
          (v2/*: any*/)
        ],
        "storageKey": null
      },
      (v3/*: any*/)
    ]
  },
  "params": {
    "cacheID": "075f8de05b4e3c2a2c864ccbce51291e",
    "id": null,
    "metadata": {},
    "name": "src_AQuery",
    "operationKind": "query",
    "text": "query src_AQuery {\n  node {\n    __typename\n    ... on HasField0 {\n      __isHasField0: __typename\n      field0\n    }\n    id\n  }\n  hasField0 {\n    __typename\n    ... on Node {\n      __isNode: __typename\n      id\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "068015789f7a84da679cac2d46e24487";

export default node;
