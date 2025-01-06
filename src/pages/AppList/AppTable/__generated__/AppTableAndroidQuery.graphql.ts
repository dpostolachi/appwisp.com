/**
 * @generated SignedSource<<f50e0baddf12de59cf231e24b532a7e4>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type AppTableAndroidQuery$variables = {
  after?: string | null | undefined;
  categories?: ReadonlyArray<string> | null | undefined;
  first: number;
  maxInstalls?: number | null | undefined;
  minInstalls?: number | null | undefined;
  query?: string | null | undefined;
  sdks?: ReadonlyArray<string> | null | undefined;
};
export type AppTableAndroidQuery$data = {
  readonly allAndroidApps: {
    readonly __typename: "AndroidAppConnection";
    readonly " $fragmentSpreads": FragmentRefs<"AndroidTableFragment">;
  } | null | undefined;
};
export type AppTableAndroidQuery = {
  response: AppTableAndroidQuery$data;
  variables: AppTableAndroidQuery$variables;
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
v6 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "sdks"
},
v7 = [
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
    "kind": "Variable",
    "name": "sdks",
    "variableName": "sdks"
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
v8 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "__typename",
  "storageKey": null
},
v9 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v10 = {
  "kind": "Literal",
  "name": "height",
  "value": 64
},
v11 = {
  "kind": "Literal",
  "name": "width",
  "value": 64
},
v12 = [
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "url",
    "storageKey": null
  }
],
v13 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [
      (v0/*: any*/),
      (v1/*: any*/),
      (v2/*: any*/),
      (v3/*: any*/),
      (v4/*: any*/),
      (v5/*: any*/),
      (v6/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "AppTableAndroidQuery",
    "selections": [
      {
        "alias": null,
        "args": (v7/*: any*/),
        "concreteType": "AndroidAppConnection",
        "kind": "LinkedField",
        "name": "allAndroidApps",
        "plural": false,
        "selections": [
          (v8/*: any*/),
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "AndroidTableFragment"
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
      (v5/*: any*/),
      (v6/*: any*/)
    ],
    "kind": "Operation",
    "name": "AppTableAndroidQuery",
    "selections": [
      {
        "alias": null,
        "args": (v7/*: any*/),
        "concreteType": "AndroidAppConnection",
        "kind": "LinkedField",
        "name": "allAndroidApps",
        "plural": false,
        "selections": [
          (v8/*: any*/),
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
                  (v9/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "packageName",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "PlaystoreAppData",
                    "kind": "LinkedField",
                    "name": "playstoreData",
                    "plural": false,
                    "selections": [
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "title",
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "Image",
                        "kind": "LinkedField",
                        "name": "icon",
                        "plural": false,
                        "selections": [
                          {
                            "alias": "avif",
                            "args": [
                              {
                                "kind": "Literal",
                                "name": "format",
                                "value": "AVIF"
                              },
                              (v10/*: any*/),
                              (v11/*: any*/)
                            ],
                            "concreteType": "ImageOutput",
                            "kind": "LinkedField",
                            "name": "image",
                            "plural": false,
                            "selections": (v12/*: any*/),
                            "storageKey": "image(format:\"AVIF\",height:64,width:64)"
                          },
                          {
                            "alias": "webp",
                            "args": [
                              {
                                "kind": "Literal",
                                "name": "format",
                                "value": "WEBP"
                              },
                              (v10/*: any*/),
                              (v11/*: any*/)
                            ],
                            "concreteType": "ImageOutput",
                            "kind": "LinkedField",
                            "name": "image",
                            "plural": false,
                            "selections": (v12/*: any*/),
                            "storageKey": "image(format:\"WEBP\",height:64,width:64)"
                          }
                        ],
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "installs",
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "PlaystoreDeveloper",
                        "kind": "LinkedField",
                        "name": "developer",
                        "plural": false,
                        "selections": [
                          (v13/*: any*/),
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "countryName",
                            "storageKey": null
                          },
                          (v9/*: any*/)
                        ],
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "PlaystoreCategory",
                        "kind": "LinkedField",
                        "name": "categories",
                        "plural": true,
                        "selections": [
                          (v13/*: any*/),
                          (v9/*: any*/)
                        ],
                        "storageKey": null
                      },
                      (v9/*: any*/)
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
    "cacheID": "f4abd7bfb62fc0bc17c228c010bcd06b",
    "id": null,
    "metadata": {},
    "name": "AppTableAndroidQuery",
    "operationKind": "query",
    "text": "query AppTableAndroidQuery(\n  $minInstalls: Int\n  $maxInstalls: Int\n  $first: Int!\n  $after: String\n  $categories: [String!]\n  $query: String\n  $sdks: [String!]\n) {\n  allAndroidApps(minInstalls: $minInstalls, maxInstalls: $maxInstalls, categories: $categories, sdks: $sdks, query: $query, sort: [{field: MAX_INSTALLS, direction: DESC}], first: $first, after: $after) {\n    __typename\n    ...AndroidTableFragment\n  }\n}\n\nfragment AndroidTableFragment on AndroidAppConnection {\n  edges {\n    node {\n      id\n      packageName\n      playstoreData {\n        title\n        icon {\n          avif: image(width: 64, height: 64, format: AVIF) {\n            url\n          }\n          webp: image(width: 64, height: 64, format: WEBP) {\n            url\n          }\n        }\n        installs\n        developer {\n          name\n          countryName\n          id\n        }\n        categories {\n          name\n          id\n        }\n        id\n      }\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "1ec55d22925536daa35ba010e8a3ad3b";

export default node;
