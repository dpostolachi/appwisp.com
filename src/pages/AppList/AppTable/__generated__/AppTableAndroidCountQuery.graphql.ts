/**
 * @generated SignedSource<<03ac7ed65f8d78b99b70c2d84231a9a9>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type AppTableAndroidCountQuery$variables = {
  categories?: ReadonlyArray<string> | null | undefined;
  maxInstalls?: number | null | undefined;
  minInstalls?: number | null | undefined;
  query?: string | null | undefined;
  sdks?: ReadonlyArray<string> | null | undefined;
};
export type AppTableAndroidCountQuery$data = {
  readonly allAndroidApps: {
    readonly count: number;
  } | null | undefined;
};
export type AppTableAndroidCountQuery = {
  response: AppTableAndroidCountQuery$data;
  variables: AppTableAndroidCountQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "categories"
},
v1 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "maxInstalls"
},
v2 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "minInstalls"
},
v3 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "query"
},
v4 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "sdks"
},
v5 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "categories",
        "variableName": "categories"
      },
      {
        "kind": "Literal",
        "name": "first",
        "value": 0
      },
      {
        "kind": "Variable",
        "name": "maxInstalls",
        "variableName": "maxInstalls"
      },
      {
        "kind": "Variable",
        "name": "minInstalls",
        "variableName": "minInstalls"
      },
      {
        "kind": "Variable",
        "name": "query",
        "variableName": "query"
      },
      {
        "kind": "Variable",
        "name": "sdks",
        "variableName": "sdks"
      }
    ],
    "concreteType": "AndroidAppConnection",
    "kind": "LinkedField",
    "name": "allAndroidApps",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "count",
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": [
      (v0/*: any*/),
      (v1/*: any*/),
      (v2/*: any*/),
      (v3/*: any*/),
      (v4/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "AppTableAndroidCountQuery",
    "selections": (v5/*: any*/),
    "type": "RootQueryType",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [
      (v2/*: any*/),
      (v1/*: any*/),
      (v0/*: any*/),
      (v3/*: any*/),
      (v4/*: any*/)
    ],
    "kind": "Operation",
    "name": "AppTableAndroidCountQuery",
    "selections": (v5/*: any*/)
  },
  "params": {
    "cacheID": "a8789909c8e3196548dbf3a28baa6b7a",
    "id": null,
    "metadata": {},
    "name": "AppTableAndroidCountQuery",
    "operationKind": "query",
    "text": "query AppTableAndroidCountQuery(\n  $minInstalls: Int\n  $maxInstalls: Int\n  $categories: [String!]\n  $query: String\n  $sdks: [String!]\n) {\n  allAndroidApps(minInstalls: $minInstalls, maxInstalls: $maxInstalls, categories: $categories, sdks: $sdks, query: $query, first: 0) {\n    count\n  }\n}\n"
  }
};
})();

(node as any).hash = "ca57bdff096da023cd96bb8b4a408cd2";

export default node;
