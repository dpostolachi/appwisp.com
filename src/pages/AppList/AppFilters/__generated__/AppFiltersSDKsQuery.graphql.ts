/**
 * @generated SignedSource<<5210afd73377ad9882d71057fe7aa8e3>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type AppFiltersSDKsQuery$variables = Record<PropertyKey, never>;
export type AppFiltersSDKsQuery$data = {
  readonly allAndroidSdksCategories: {
    readonly edges: ReadonlyArray<{
      readonly node: {
        readonly androidSdks: {
          readonly edges: ReadonlyArray<{
            readonly node: {
              readonly id: string;
              readonly name: string;
            } | null | undefined;
          } | null | undefined> | null | undefined;
        } | null | undefined;
        readonly id: string;
        readonly name: string;
        readonly " $fragmentSpreads": FragmentRefs<"AppFiltersSDKs_fragmentSDKCategory">;
      } | null | undefined;
    } | null | undefined> | null | undefined;
  } | null | undefined;
};
export type AppFiltersSDKsQuery = {
  response: AppFiltersSDKsQuery$data;
  variables: AppFiltersSDKsQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "kind": "Literal",
    "name": "first",
    "value": 99
  }
],
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": (v0/*: any*/),
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
            (v1/*: any*/),
            (v2/*: any*/)
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
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "AppFiltersSDKsQuery",
    "selections": [
      {
        "alias": null,
        "args": (v0/*: any*/),
        "concreteType": "AndroidSdkCategoryConnection",
        "kind": "LinkedField",
        "name": "allAndroidSdksCategories",
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
                  (v1/*: any*/),
                  (v2/*: any*/),
                  {
                    "args": null,
                    "kind": "FragmentSpread",
                    "name": "AppFiltersSDKs_fragmentSDKCategory"
                  },
                  (v3/*: any*/)
                ],
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": "allAndroidSdksCategories(first:99)"
      }
    ],
    "type": "RootQueryType",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "AppFiltersSDKsQuery",
    "selections": [
      {
        "alias": null,
        "args": (v0/*: any*/),
        "concreteType": "AndroidSdkCategoryConnection",
        "kind": "LinkedField",
        "name": "allAndroidSdksCategories",
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
                  (v1/*: any*/),
                  (v2/*: any*/),
                  (v3/*: any*/)
                ],
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": "allAndroidSdksCategories(first:99)"
      }
    ]
  },
  "params": {
    "cacheID": "de441dcace70a695c348051d3b00ce19",
    "id": null,
    "metadata": {},
    "name": "AppFiltersSDKsQuery",
    "operationKind": "query",
    "text": "query AppFiltersSDKsQuery {\n  allAndroidSdksCategories(first: 99) {\n    edges {\n      node {\n        id\n        name\n        ...AppFiltersSDKs_fragmentSDKCategory\n        androidSdks(first: 99) {\n          edges {\n            node {\n              id\n              name\n            }\n          }\n        }\n      }\n    }\n  }\n}\n\nfragment AppFiltersSDKs_fragmentSDKCategory on AndroidSdkCategory {\n  id\n  name\n  androidSdks(first: 99) {\n    edges {\n      node {\n        id\n        name\n      }\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "49a37b65fb4782d690370e07af7ed19d";

export default node;
