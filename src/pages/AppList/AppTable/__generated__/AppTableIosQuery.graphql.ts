/**
 * @generated SignedSource<<04b90b1d98c9704d073996eba23280b2>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type AppTableIosQuery$variables = {
  after?: string | null | undefined;
  categories?: ReadonlyArray<string> | null | undefined;
  first: number;
  maxInstalls?: number | null | undefined;
  minInstalls?: number | null | undefined;
  query?: string | null | undefined;
  sdks?: ReadonlyArray<string> | null | undefined;
};
export type AppTableIosQuery$data = {
  readonly allIosApps: {
    readonly __typename: "IosAppConnection";
    readonly " $fragmentSpreads": FragmentRefs<"IOSTableFragment">;
  } | null | undefined;
};
export type AppTableIosQuery = {
  response: AppTableIosQuery$data;
  variables: AppTableIosQuery$variables;
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
    "name": "AppTableIosQuery",
    "selections": [
      {
        "alias": null,
        "args": (v7/*: any*/),
        "concreteType": "IosAppConnection",
        "kind": "LinkedField",
        "name": "allIosApps",
        "plural": false,
        "selections": [
          (v8/*: any*/),
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "IOSTableFragment"
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
    "name": "AppTableIosQuery",
    "selections": [
      {
        "alias": null,
        "args": (v7/*: any*/),
        "concreteType": "IosAppConnection",
        "kind": "LinkedField",
        "name": "allIosApps",
        "plural": false,
        "selections": [
          (v8/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "IosAppEdge",
            "kind": "LinkedField",
            "name": "edges",
            "plural": true,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "IosApp",
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
                    "concreteType": "AppstoreAppData",
                    "kind": "LinkedField",
                    "name": "appstoreData",
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
                        "concreteType": "AppstoreDeveloper",
                        "kind": "LinkedField",
                        "name": "developer",
                        "plural": false,
                        "selections": [
                          {
                            "alias": null,
                            "args": null,
                            "concreteType": "PlaystoreDeveloper",
                            "kind": "LinkedField",
                            "name": "playstoreDeveloper",
                            "plural": false,
                            "selections": [
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
                          (v13/*: any*/),
                          (v9/*: any*/)
                        ],
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "AppstoreCategory",
                        "kind": "LinkedField",
                        "name": "category",
                        "plural": false,
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
    "cacheID": "7f3c531d87e1794e2e8d85e4af947630",
    "id": null,
    "metadata": {},
    "name": "AppTableIosQuery",
    "operationKind": "query",
    "text": "query AppTableIosQuery(\n  $minInstalls: Int\n  $maxInstalls: Int\n  $first: Int!\n  $after: String\n  $categories: [String!]\n  $query: String\n  $sdks: [String!]\n) {\n  allIosApps(minInstalls: $minInstalls, maxInstalls: $maxInstalls, categories: $categories, sdks: $sdks, query: $query, sort: [{field: MAX_INSTALLS, direction: DESC}], first: $first, after: $after) {\n    __typename\n    ...IOSTableFragment\n  }\n}\n\nfragment IOSTableFragment on IosAppConnection {\n  edges {\n    node {\n      id\n      packageName\n      appstoreData {\n        title\n        icon {\n          avif: image(width: 64, height: 64, format: AVIF) {\n            url\n          }\n          webp: image(width: 64, height: 64, format: WEBP) {\n            url\n          }\n        }\n        installs\n        developer {\n          playstoreDeveloper {\n            countryName\n            id\n          }\n          name\n          id\n        }\n        category {\n          name\n          id\n        }\n        id\n      }\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "9ccad6ff463e45dc863f5e38f758ab85";

export default node;
