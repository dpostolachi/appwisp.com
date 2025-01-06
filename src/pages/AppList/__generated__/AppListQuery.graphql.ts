/**
 * @generated SignedSource<<9de7e6efd5933b10ccec495b0261b4e7>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type AppListQuery$variables = Record<PropertyKey, never>;
export type AppListQuery$data = {
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
      } | null | undefined;
    } | null | undefined> | null | undefined;
  } | null | undefined;
  readonly allAppstoreCategories: {
    readonly edges: ReadonlyArray<{
      readonly node: {
        readonly id: string;
        readonly name: string;
      } | null | undefined;
    } | null | undefined> | null | undefined;
  } | null | undefined;
  readonly allPlaystoreCategories: {
    readonly edges: ReadonlyArray<{
      readonly node: {
        readonly id: string;
        readonly name: string;
      } | null | undefined;
    } | null | undefined> | null | undefined;
  } | null | undefined;
  readonly " $fragmentSpreads": FragmentRefs<"AppFiltersFragment">;
};
export type AppListQuery = {
  response: AppListQuery$data;
  variables: AppListQuery$variables;
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
v3 = [
  (v1/*: any*/),
  (v2/*: any*/)
],
v4 = {
  "alias": null,
  "args": (v0/*: any*/),
  "concreteType": "PlaystoreCategoryConnection",
  "kind": "LinkedField",
  "name": "allPlaystoreCategories",
  "plural": false,
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "PlaystoreCategoryEdge",
      "kind": "LinkedField",
      "name": "edges",
      "plural": true,
      "selections": [
        {
          "alias": null,
          "args": null,
          "concreteType": "PlaystoreCategory",
          "kind": "LinkedField",
          "name": "node",
          "plural": false,
          "selections": (v3/*: any*/),
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "storageKey": "allPlaystoreCategories(first:99)"
},
v5 = {
  "alias": null,
  "args": (v0/*: any*/),
  "concreteType": "AppstoreCategoryConnection",
  "kind": "LinkedField",
  "name": "allAppstoreCategories",
  "plural": false,
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "AppstoreCategoryEdge",
      "kind": "LinkedField",
      "name": "edges",
      "plural": true,
      "selections": [
        {
          "alias": null,
          "args": null,
          "concreteType": "AppstoreCategory",
          "kind": "LinkedField",
          "name": "node",
          "plural": false,
          "selections": (v3/*: any*/),
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "storageKey": "allAppstoreCategories(first:99)"
},
v6 = {
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
                      "selections": (v3/*: any*/),
                      "storageKey": null
                    }
                  ],
                  "storageKey": null
                }
              ],
              "storageKey": "androidSdks(first:99)"
            }
          ],
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "storageKey": "allAndroidSdksCategories(first:99)"
};
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "AppListQuery",
    "selections": [
      {
        "args": null,
        "kind": "FragmentSpread",
        "name": "AppFiltersFragment"
      },
      (v4/*: any*/),
      (v5/*: any*/),
      (v6/*: any*/)
    ],
    "type": "RootQueryType",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "AppListQuery",
    "selections": [
      (v4/*: any*/),
      (v5/*: any*/),
      (v6/*: any*/)
    ]
  },
  "params": {
    "cacheID": "5001f808cff6f469f642797a30d89f00",
    "id": null,
    "metadata": {},
    "name": "AppListQuery",
    "operationKind": "query",
    "text": "query AppListQuery {\n  ...AppFiltersFragment\n  allPlaystoreCategories(first: 99) {\n    edges {\n      node {\n        id\n        name\n      }\n    }\n  }\n  allAppstoreCategories(first: 99) {\n    edges {\n      node {\n        id\n        name\n      }\n    }\n  }\n  allAndroidSdksCategories(first: 99) {\n    edges {\n      node {\n        id\n        name\n        androidSdks(first: 99) {\n          edges {\n            node {\n              id\n              name\n            }\n          }\n        }\n      }\n    }\n  }\n}\n\nfragment AppFiltersCategoriesFragment on RootQueryType {\n  allPlaystoreCategories(first: 99) {\n    edges {\n      node {\n        id\n        name\n      }\n    }\n  }\n  allAppstoreCategories(first: 99) {\n    edges {\n      node {\n        id\n        name\n      }\n    }\n  }\n}\n\nfragment AppFiltersFragment on RootQueryType {\n  ...AppFiltersCategoriesFragment\n  ...AppFiltersSDKsFragment\n}\n\nfragment AppFiltersSDKsFragment on RootQueryType {\n  allAndroidSdksCategories(first: 99) {\n    edges {\n      node {\n        id\n        name\n        ...AppFiltersSDKs_fragmentSDKCategory\n        androidSdks(first: 99) {\n          edges {\n            node {\n              id\n              name\n            }\n          }\n        }\n      }\n    }\n  }\n}\n\nfragment AppFiltersSDKs_fragmentSDKCategory on AndroidSdkCategory {\n  id\n  name\n  androidSdks(first: 99) {\n    edges {\n      node {\n        id\n        name\n      }\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "191de0bf8a9ffae1b995edacdade821d";

export default node;
