/**
 * @generated SignedSource<<cb493fedca62169b925675764b7f638d>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type SDKCategoriesQuery$variables = Record<PropertyKey, never>;
export type SDKCategoriesQuery$data = {
  readonly allAndroidSdksCategories: {
    readonly edges: ReadonlyArray<{
      readonly node: {
        readonly id: string;
        readonly name: string;
        readonly slug: string;
      } | null | undefined;
    } | null | undefined> | null | undefined;
  } | null | undefined;
};
export type SDKCategoriesQuery = {
  response: SDKCategoriesQuery$data;
  variables: SDKCategoriesQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Literal",
        "name": "first",
        "value": 99
      }
    ],
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
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "id",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "name",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "slug",
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "storageKey": "allAndroidSdksCategories(first:99)"
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "SDKCategoriesQuery",
    "selections": (v0/*: any*/),
    "type": "RootQueryType",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "SDKCategoriesQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "0780c8a42f6d8bf9f5141a81d832ec73",
    "id": null,
    "metadata": {},
    "name": "SDKCategoriesQuery",
    "operationKind": "query",
    "text": "query SDKCategoriesQuery {\n  allAndroidSdksCategories(first: 99) {\n    edges {\n      node {\n        id\n        name\n        slug\n      }\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "39d637b8d1af3f534e9f7ae74d4b9588";

export default node;
