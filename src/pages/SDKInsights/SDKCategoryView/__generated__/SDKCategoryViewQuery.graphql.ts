/**
 * @generated SignedSource<<921396f161a5cfeb5f74dd46333c6bb8>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type SDKCategoryViewQuery$variables = {
  id: string;
};
export type SDKCategoryViewQuery$data = {
  readonly node: {
    readonly name?: string;
    readonly slug?: string;
    readonly " $fragmentSpreads": FragmentRefs<"SDKDistributionFragment">;
  } | null | undefined;
};
export type SDKCategoryViewQuery = {
  response: SDKCategoryViewQuery$data;
  variables: SDKCategoryViewQuery$variables;
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
  "name": "slug",
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
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "SDKCategoryViewQuery",
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
              (v2/*: any*/),
              (v3/*: any*/),
              {
                "args": null,
                "kind": "FragmentSpread",
                "name": "SDKDistributionFragment"
              }
            ],
            "type": "AndroidSdkCategory",
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
    "name": "SDKCategoryViewQuery",
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
              (v2/*: any*/),
              (v3/*: any*/),
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
                          (v4/*: any*/),
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
                          },
                          (v2/*: any*/),
                          (v3/*: any*/)
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
          },
          (v4/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "f45dfdb2457b17f247e048ca1a71f469",
    "id": null,
    "metadata": {},
    "name": "SDKCategoryViewQuery",
    "operationKind": "query",
    "text": "query SDKCategoryViewQuery(\n  $id: ID!\n) {\n  node(id: $id) {\n    __typename\n    ... on AndroidSdkCategory {\n      name\n      slug\n      ...SDKDistributionFragment\n    }\n    id\n  }\n}\n\nfragment SDKDistributionFragment on AndroidSdkCategory {\n  name\n  totalApps\n  androidSdks(first: 100) {\n    edges {\n      node {\n        id\n        androidApps(first: 0) {\n          count\n        }\n        iosApps(first: 0) {\n          count\n        }\n        ...SDKItemFragment\n      }\n    }\n  }\n}\n\nfragment SDKItemFragment on AndroidSdk {\n  id\n  name\n  slug\n  androidApps(first: 0) {\n    count\n  }\n  iosApps(first: 0) {\n    count\n  }\n}\n"
  }
};
})();

(node as any).hash = "edcfeee8d587dba615ac85bdf2fe357a";

export default node;
