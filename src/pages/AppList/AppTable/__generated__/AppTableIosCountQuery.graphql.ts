/**
 * @generated SignedSource<<63c42f0f687d912f0705ee0a942608bc>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type AppTableIosCountQuery$variables = {
  categories?: ReadonlyArray<string> | null | undefined;
  maxInstalls?: number | null | undefined;
  minInstalls?: number | null | undefined;
  query?: string | null | undefined;
  sdks?: ReadonlyArray<string> | null | undefined;
};
export type AppTableIosCountQuery$data = {
  readonly allIosApps: {
    readonly count: number;
  } | null | undefined;
};
export type AppTableIosCountQuery = {
  response: AppTableIosCountQuery$data;
  variables: AppTableIosCountQuery$variables;
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
    "concreteType": "IosAppConnection",
    "kind": "LinkedField",
    "name": "allIosApps",
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
    "name": "AppTableIosCountQuery",
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
    "name": "AppTableIosCountQuery",
    "selections": (v5/*: any*/)
  },
  "params": {
    "cacheID": "286523f1005dd78fa556f814008b2ba0",
    "id": null,
    "metadata": {},
    "name": "AppTableIosCountQuery",
    "operationKind": "query",
    "text": "query AppTableIosCountQuery(\n  $minInstalls: Int\n  $maxInstalls: Int\n  $categories: [String!]\n  $query: String\n  $sdks: [String!]\n) {\n  allIosApps(minInstalls: $minInstalls, maxInstalls: $maxInstalls, categories: $categories, sdks: $sdks, query: $query, first: 0) {\n    count\n  }\n}\n"
  }
};
})();

(node as any).hash = "ff07224f1825e8ff64696431cbe78e75";

export default node;
