/**
 * @generated SignedSource<<55f4e803f4f64595a0259b61084a510c>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type SDKViewRankQuery$variables = {
  id: string;
};
export type SDKViewRankQuery$data = {
  readonly node: {
    readonly categories?: {
      readonly edges: ReadonlyArray<{
        readonly node: {
          readonly androidSdks: {
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
          readonly name: string;
        } | null | undefined;
      } | null | undefined> | null | undefined;
    } | null | undefined;
  } | null | undefined;
};
export type SDKViewRankQuery = {
  response: SDKViewRankQuery$data;
  variables: SDKViewRankQuery$variables;
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
v2 = [
  {
    "kind": "Literal",
    "name": "first",
    "value": 3
  }
],
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v5 = [
  {
    "kind": "Literal",
    "name": "first",
    "value": 0
  }
],
v6 = [
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "count",
    "storageKey": null
  }
],
v7 = {
  "alias": null,
  "args": [
    {
      "kind": "Literal",
      "name": "first",
      "value": 99
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
            (v4/*: any*/),
            (v3/*: any*/),
            {
              "alias": null,
              "args": (v5/*: any*/),
              "concreteType": "AndroidAppConnection",
              "kind": "LinkedField",
              "name": "androidApps",
              "plural": false,
              "selections": (v6/*: any*/),
              "storageKey": "androidApps(first:0)"
            },
            {
              "alias": null,
              "args": (v5/*: any*/),
              "concreteType": "IosAppConnection",
              "kind": "LinkedField",
              "name": "iosApps",
              "plural": false,
              "selections": (v6/*: any*/),
              "storageKey": "iosApps(first:0)"
            }
          ],
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "storageKey": "androidSdks(first:99)"
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "SDKViewRankQuery",
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
            "kind": "InlineFragment",
            "selections": [
              {
                "alias": null,
                "args": (v2/*: any*/),
                "concreteType": "AndroidSdkCategoryConnection",
                "kind": "LinkedField",
                "name": "categories",
                "plural": false,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "AndroidSdkCategoryEdge",
                    "kind": "LinkedField",
                    "name": "edges",
                    "plural": true,
                    "selections": [
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "AndroidSdkCategory",
                        "kind": "LinkedField",
                        "name": "node",
                        "plural": false,
                        "selections": [
                          (v3/*: any*/),
                          (v7/*: any*/)
                        ],
                        "storageKey": null
                      }
                    ],
                    "storageKey": null
                  }
                ],
                "storageKey": "categories(first:3)"
              }
            ],
            "type": "AndroidSdk",
            "abstractKey": null
          }
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
    "name": "SDKViewRankQuery",
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
          {
            "kind": "InlineFragment",
            "selections": [
              {
                "alias": null,
                "args": (v2/*: any*/),
                "concreteType": "AndroidSdkCategoryConnection",
                "kind": "LinkedField",
                "name": "categories",
                "plural": false,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "AndroidSdkCategoryEdge",
                    "kind": "LinkedField",
                    "name": "edges",
                    "plural": true,
                    "selections": [
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "AndroidSdkCategory",
                        "kind": "LinkedField",
                        "name": "node",
                        "plural": false,
                        "selections": [
                          (v3/*: any*/),
                          (v7/*: any*/),
                          (v4/*: any*/)
                        ],
                        "storageKey": null
                      }
                    ],
                    "storageKey": null
                  }
                ],
                "storageKey": "categories(first:3)"
              }
            ],
            "type": "AndroidSdk",
            "abstractKey": null
          },
          (v4/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "9d9461a54b9ca23f4d6a33c8078e6e34",
    "id": null,
    "metadata": {},
    "name": "SDKViewRankQuery",
    "operationKind": "query",
    "text": "query SDKViewRankQuery(\n  $id: ID!\n) {\n  node(id: $id) {\n    __typename\n    ... on AndroidSdk {\n      categories(first: 3) {\n        edges {\n          node {\n            name\n            androidSdks(first: 99) {\n              edges {\n                node {\n                  id\n                  name\n                  androidApps(first: 0) {\n                    count\n                  }\n                  iosApps(first: 0) {\n                    count\n                  }\n                }\n              }\n            }\n            id\n          }\n        }\n      }\n    }\n    id\n  }\n}\n"
  }
};
})();

(node as any).hash = "4626e7997d0d317607e3d46a5f21230d";

export default node;
