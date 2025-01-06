/**
 * @generated SignedSource<<56394f448aa29080e7b15f41a4edb4bc>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type AppFiltersCategoriesQuery$variables = Record<PropertyKey, never>;
export type AppFiltersCategoriesQuery$data = {
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
};
export type AppFiltersCategoriesQuery = {
  response: AppFiltersCategoriesQuery$data;
  variables: AppFiltersCategoriesQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "kind": "Literal",
    "name": "first",
    "value": 99
  }
],
v1 = [
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
  }
],
v2 = [
  {
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
            "selections": (v1/*: any*/),
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "storageKey": "allPlaystoreCategories(first:99)"
  },
  {
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
            "selections": (v1/*: any*/),
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "storageKey": "allAppstoreCategories(first:99)"
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "AppFiltersCategoriesQuery",
    "selections": (v2/*: any*/),
    "type": "RootQueryType",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "AppFiltersCategoriesQuery",
    "selections": (v2/*: any*/)
  },
  "params": {
    "cacheID": "b9fb461391ba4187240427d46e518583",
    "id": null,
    "metadata": {},
    "name": "AppFiltersCategoriesQuery",
    "operationKind": "query",
    "text": "query AppFiltersCategoriesQuery {\n  allPlaystoreCategories(first: 99) {\n    edges {\n      node {\n        id\n        name\n      }\n    }\n  }\n  allAppstoreCategories(first: 99) {\n    edges {\n      node {\n        id\n        name\n      }\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "b6e8c42683558d69ea8d433e82948bbc";

export default node;
