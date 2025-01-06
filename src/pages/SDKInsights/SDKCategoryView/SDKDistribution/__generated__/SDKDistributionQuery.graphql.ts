/**
 * @generated SignedSource<<1a79f4d6e1408f264959275772f899a4>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type SDKDistributionQuery$variables = {
  id: string;
};
export type SDKDistributionQuery$data = {
  readonly node: {
    readonly androidSdks?: {
      readonly edges: ReadonlyArray<{
        readonly node: {
          readonly androidApps: {
            readonly count: number;
          } | null | undefined;
          readonly id: string;
          readonly iosApps: {
            readonly count: number;
          } | null | undefined;
          readonly name: string;
        } | null | undefined;
      } | null | undefined> | null | undefined;
    } | null | undefined;
    readonly name?: string;
    readonly totalApps?: number;
  } | null | undefined;
};
export type SDKDistributionQuery = {
  response: SDKDistributionQuery$data;
  variables: SDKDistributionQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "id"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "id"
  }
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v4 = [
  {
    "kind": "Literal",
    "name": "first",
    "value": 0
  }
],
v5 = [
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "count",
    "storageKey": null
  }
],
v6 = {
  "kind": "InlineFragment",
  "selections": [
    (v2/*: any*/),
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "totalApps",
      "storageKey": null
    },
    {
      "alias": null,
      "args": [
        {
          "kind": "Literal",
          "name": "first",
          "value": 100
        }
      ],
      "concreteType": "AndroidSdkConnection",
      "kind": "LinkedField",
      "name": "androidSdks",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "concreteType": "AndroidSdkEdge",
          "kind": "LinkedField",
          "name": "edges",
          "plural": true,
          "selections": [
            {
              "alias": null,
              "args": null,
              "concreteType": "AndroidSdk",
              "kind": "LinkedField",
              "name": "node",
              "plural": false,
              "selections": [
                (v3/*: any*/),
                (v2/*: any*/),
                {
                  "alias": null,
                  "args": (v4/*: any*/),
                  "concreteType": "AndroidAppConnection",
                  "kind": "LinkedField",
                  "name": "androidApps",
                  "plural": false,
                  "selections": (v5/*: any*/),
                  "storageKey": "androidApps(first:0)"
                },
                {
                  "alias": null,
                  "args": (v4/*: any*/),
                  "concreteType": "IosAppConnection",
                  "kind": "LinkedField",
                  "name": "iosApps",
                  "plural": false,
                  "selections": (v5/*: any*/),
                  "storageKey": "iosApps(first:0)"
                }
              ],
              "storageKey": null
            }
          ],
          "storageKey": null
        }
      ],
      "storageKey": "androidSdks(first:100)"
    }
  ],
  "type": "AndroidSdkCategory",
  "abstractKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "SDKDistributionQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": null,
        "kind": "LinkedField",
        "name": "node",
        "plural": false,
        "selections": [
          (v6/*: any*/)
        ],
        "storageKey": null
      }
    ],
    "type": "RootQueryType",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "SDKDistributionQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": null,
        "kind": "LinkedField",
        "name": "node",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "__typename",
            "storageKey": null
          },
          (v6/*: any*/),
          (v3/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "ddd886fdefc2011fa66cc7e638d8c814",
    "id": null,
    "metadata": {},
    "name": "SDKDistributionQuery",
    "operationKind": "query",
    "text": "query SDKDistributionQuery(\n  $id: ID!\n) {\n  node(id: $id) {\n    __typename\n    ... on AndroidSdkCategory {\n      name\n      totalApps\n      androidSdks(first: 100) {\n        edges {\n          node {\n            id\n            name\n            androidApps(first: 0) {\n              count\n            }\n            iosApps(first: 0) {\n              count\n            }\n          }\n        }\n      }\n    }\n    id\n  }\n}\n"
  }
};
})();

(node as any).hash = "f9a776cce373ff0ca60f2f4bc4ccf69e";

export default node;
