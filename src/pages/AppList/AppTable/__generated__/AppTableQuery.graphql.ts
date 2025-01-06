/**
 * @generated SignedSource<<e1b7b9ea8c15d818167c2b62989ee69c>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type AppTableQuery$variables = {
  after?: string | null | undefined;
  categories?: ReadonlyArray<string> | null | undefined;
  first: number;
  maxInstalls?: number | null | undefined;
  minInstalls?: number | null | undefined;
  query?: string | null | undefined;
};
export type AppTableQuery$data = {
  readonly allAndroidApps: {
    readonly count: number;
    readonly edges: ReadonlyArray<{
      readonly node: {
        readonly id: string;
        readonly playstoreData: {
          readonly categories: ReadonlyArray<{
            readonly name: string;
          }> | null | undefined;
          readonly developer: {
            readonly name: string;
          } | null | undefined;
          readonly icon: string | null | undefined;
          readonly installs: string | null | undefined;
          readonly title: string | null | undefined;
        } | null | undefined;
      } | null | undefined;
    } | null | undefined> | null | undefined;
  } | null | undefined;
};
export type AppTableQuery = {
  response: AppTableQuery$data;
  variables: AppTableQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "after"
},
v1 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "categories"
},
v2 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "first"
},
v3 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "maxInstalls"
},
v4 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "minInstalls"
},
v5 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "query"
},
v6 = [
  {
    "kind": "Variable",
    "name": "after",
    "variableName": "after"
  },
  {
    "kind": "Variable",
    "name": "categories",
    "variableName": "categories"
  },
  {
    "kind": "Variable",
    "name": "first",
    "variableName": "first"
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
    "kind": "Literal",
    "name": "sort",
    "value": [
      {
        "direction": "DESC",
        "field": "MAX_INSTALLS"
      }
    ]
  }
],
v7 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "count",
  "storageKey": null
},
v8 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v9 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "title",
  "storageKey": null
},
v10 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "icon",
  "storageKey": null
},
v11 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "installs",
  "storageKey": null
},
v12 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v13 = [
  (v12/*: any*/)
],
v14 = [
  (v12/*: any*/),
  (v8/*: any*/)
];
return {
  "fragment": {
    "argumentDefinitions": [
      (v0/*: any*/),
      (v1/*: any*/),
      (v2/*: any*/),
      (v3/*: any*/),
      (v4/*: any*/),
      (v5/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "AppTableQuery",
    "selections": [
      {
        "alias": null,
        "args": (v6/*: any*/),
        "concreteType": "AndroidAppConnection",
        "kind": "LinkedField",
        "name": "allAndroidApps",
        "plural": false,
        "selections": [
          (v7/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "AndroidAppEdge",
            "kind": "LinkedField",
            "name": "edges",
            "plural": true,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "AndroidApp",
                "kind": "LinkedField",
                "name": "node",
                "plural": false,
                "selections": [
                  (v8/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "PlaystoreAppData",
                    "kind": "LinkedField",
                    "name": "playstoreData",
                    "plural": false,
                    "selections": [
                      (v9/*: any*/),
                      (v10/*: any*/),
                      (v11/*: any*/),
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "PlaystoreDeveloper",
                        "kind": "LinkedField",
                        "name": "developer",
                        "plural": false,
                        "selections": (v13/*: any*/),
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "PlaystoreCategory",
                        "kind": "LinkedField",
                        "name": "categories",
                        "plural": true,
                        "selections": (v13/*: any*/),
                        "storageKey": null
                      }
                    ],
                    "storageKey": null
                  }
                ],
                "storageKey": null
              }
            ],
            "storageKey": null
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
    "argumentDefinitions": [
      (v4/*: any*/),
      (v3/*: any*/),
      (v2/*: any*/),
      (v0/*: any*/),
      (v1/*: any*/),
      (v5/*: any*/)
    ],
    "kind": "Operation",
    "name": "AppTableQuery",
    "selections": [
      {
        "alias": null,
        "args": (v6/*: any*/),
        "concreteType": "AndroidAppConnection",
        "kind": "LinkedField",
        "name": "allAndroidApps",
        "plural": false,
        "selections": [
          (v7/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "AndroidAppEdge",
            "kind": "LinkedField",
            "name": "edges",
            "plural": true,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "AndroidApp",
                "kind": "LinkedField",
                "name": "node",
                "plural": false,
                "selections": [
                  (v8/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "PlaystoreAppData",
                    "kind": "LinkedField",
                    "name": "playstoreData",
                    "plural": false,
                    "selections": [
                      (v9/*: any*/),
                      (v10/*: any*/),
                      (v11/*: any*/),
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "PlaystoreDeveloper",
                        "kind": "LinkedField",
                        "name": "developer",
                        "plural": false,
                        "selections": (v14/*: any*/),
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "PlaystoreCategory",
                        "kind": "LinkedField",
                        "name": "categories",
                        "plural": true,
                        "selections": (v14/*: any*/),
                        "storageKey": null
                      },
                      (v8/*: any*/)
                    ],
                    "storageKey": null
                  }
                ],
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "f9d05eda98351f169a4bc98e8816eb85",
    "id": null,
    "metadata": {},
    "name": "AppTableQuery",
    "operationKind": "query",
    "text": "query AppTableQuery(\n  $minInstalls: Int\n  $maxInstalls: Int\n  $first: Int!\n  $after: String\n  $categories: [String!]\n  $query: String\n) {\n  allAndroidApps(minInstalls: $minInstalls, maxInstalls: $maxInstalls, categories: $categories, query: $query, sort: [{field: MAX_INSTALLS, direction: DESC}], first: $first, after: $after) {\n    count\n    edges {\n      node {\n        id\n        playstoreData {\n          title\n          icon\n          installs\n          developer {\n            name\n            id\n          }\n          categories {\n            name\n            id\n          }\n          id\n        }\n      }\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "615b7fcc4e0daf300867e34ff77554ab";

export default node;
