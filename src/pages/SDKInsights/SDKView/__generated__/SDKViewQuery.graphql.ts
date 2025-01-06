/**
 * @generated SignedSource<<09209f5ed9644e61cbb1ac26825db75b>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type SDKViewQuery$variables = {
  id: string;
};
export type SDKViewQuery$data = {
  readonly node: {
    readonly description?: string | null | undefined;
    readonly id?: string;
    readonly name?: string;
    readonly slug?: string;
    readonly website?: string | null | undefined;
    readonly " $fragmentSpreads": FragmentRefs<"SDKViewRankFragment" | "SDKViewStatsFragment">;
  } | null | undefined;
};
export type SDKViewQuery = {
  response: SDKViewQuery$data;
  variables: SDKViewQuery$variables;
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
  "name": "id",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "description",
  "storageKey": null
},
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "website",
  "storageKey": null
},
v6 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "slug",
  "storageKey": null
},
v7 = [
  {
    "kind": "Literal",
    "name": "first",
    "value": 0
  }
],
v8 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "count",
  "storageKey": null
},
v9 = [
  (v8/*: any*/)
],
v10 = {
  "kind": "Literal",
  "name": "first",
  "value": 10
},
v11 = [
  (v10/*: any*/),
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
v12 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "packageName",
  "storageKey": null
},
v13 = {
  "kind": "Literal",
  "name": "height",
  "value": 64
},
v14 = {
  "kind": "Literal",
  "name": "width",
  "value": 64
},
v15 = [
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "url",
    "storageKey": null
  }
],
v16 = [
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
          (v13/*: any*/),
          (v14/*: any*/)
        ],
        "concreteType": "ImageOutput",
        "kind": "LinkedField",
        "name": "image",
        "plural": false,
        "selections": (v15/*: any*/),
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
          (v13/*: any*/),
          (v14/*: any*/)
        ],
        "concreteType": "ImageOutput",
        "kind": "LinkedField",
        "name": "image",
        "plural": false,
        "selections": (v15/*: any*/),
        "storageKey": "image(format:\"WEBP\",height:64,width:64)"
      }
    ],
    "storageKey": null
  },
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
    "kind": "ScalarField",
    "name": "released",
    "storageKey": null
  },
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "installs",
    "storageKey": null
  },
  (v2/*: any*/)
],
v17 = {
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
        (v2/*: any*/),
        (v12/*: any*/),
        {
          "alias": null,
          "args": null,
          "concreteType": "PlaystoreAppData",
          "kind": "LinkedField",
          "name": "playstoreData",
          "plural": false,
          "selections": (v16/*: any*/),
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "storageKey": null
},
v18 = {
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
        (v2/*: any*/),
        (v12/*: any*/),
        {
          "alias": null,
          "args": null,
          "concreteType": "AppstoreAppData",
          "kind": "LinkedField",
          "name": "appstoreData",
          "plural": false,
          "selections": (v16/*: any*/),
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "storageKey": null
},
v19 = [
  (v10/*: any*/),
  {
    "kind": "Literal",
    "name": "sort",
    "value": [
      {
        "direction": "DESC",
        "field": "RELEASED"
      }
    ]
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "SDKViewQuery",
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
              (v4/*: any*/),
              (v5/*: any*/),
              (v6/*: any*/),
              {
                "args": null,
                "kind": "FragmentSpread",
                "name": "SDKViewRankFragment"
              },
              {
                "args": null,
                "kind": "FragmentSpread",
                "name": "SDKViewStatsFragment"
              }
            ],
            "type": "AndroidSdk",
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
    "name": "SDKViewQuery",
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
          (v2/*: any*/),
          {
            "kind": "InlineFragment",
            "selections": [
              (v3/*: any*/),
              (v4/*: any*/),
              (v5/*: any*/),
              (v6/*: any*/),
              {
                "alias": null,
                "args": [
                  {
                    "kind": "Literal",
                    "name": "first",
                    "value": 3
                  }
                ],
                "concreteType": "AndroidSdkCategoryConnection",
                "kind": "LinkedField",
                "name": "categories",
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
                          (v3/*: any*/),
                          {
                            "alias": null,
                            "args": [
                              {
                                "kind": "Literal",
                                "name": "first",
                                "value": 99
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
                                      (v2/*: any*/),
                                      (v3/*: any*/),
                                      {
                                        "alias": null,
                                        "args": (v7/*: any*/),
                                        "concreteType": "AndroidAppConnection",
                                        "kind": "LinkedField",
                                        "name": "androidApps",
                                        "plural": false,
                                        "selections": (v9/*: any*/),
                                        "storageKey": "androidApps(first:0)"
                                      },
                                      {
                                        "alias": null,
                                        "args": (v7/*: any*/),
                                        "concreteType": "IosAppConnection",
                                        "kind": "LinkedField",
                                        "name": "iosApps",
                                        "plural": false,
                                        "selections": (v9/*: any*/),
                                        "storageKey": "iosApps(first:0)"
                                      }
                                    ],
                                    "storageKey": null
                                  }
                                ],
                                "storageKey": null
                              }
                            ],
                            "storageKey": "androidSdks(first:99)"
                          },
                          (v2/*: any*/)
                        ],
                        "storageKey": null
                      }
                    ],
                    "storageKey": null
                  }
                ],
                "storageKey": "categories(first:3)"
              },
              {
                "alias": "androidPopularApps",
                "args": (v11/*: any*/),
                "concreteType": "AndroidAppConnection",
                "kind": "LinkedField",
                "name": "androidApps",
                "plural": false,
                "selections": [
                  (v8/*: any*/),
                  (v17/*: any*/)
                ],
                "storageKey": "androidApps(first:10,sort:[{\"direction\":\"DESC\",\"field\":\"MAX_INSTALLS\"}])"
              },
              {
                "alias": "iosPopularApps",
                "args": (v11/*: any*/),
                "concreteType": "IosAppConnection",
                "kind": "LinkedField",
                "name": "iosApps",
                "plural": false,
                "selections": [
                  (v8/*: any*/),
                  (v18/*: any*/)
                ],
                "storageKey": "iosApps(first:10,sort:[{\"direction\":\"DESC\",\"field\":\"MAX_INSTALLS\"}])"
              },
              {
                "alias": "androidLatestApps",
                "args": (v19/*: any*/),
                "concreteType": "AndroidAppConnection",
                "kind": "LinkedField",
                "name": "androidApps",
                "plural": false,
                "selections": [
                  (v17/*: any*/)
                ],
                "storageKey": "androidApps(first:10,sort:[{\"direction\":\"DESC\",\"field\":\"RELEASED\"}])"
              },
              {
                "alias": "iosLatestApps",
                "args": (v19/*: any*/),
                "concreteType": "IosAppConnection",
                "kind": "LinkedField",
                "name": "iosApps",
                "plural": false,
                "selections": [
                  (v18/*: any*/)
                ],
                "storageKey": "iosApps(first:10,sort:[{\"direction\":\"DESC\",\"field\":\"RELEASED\"}])"
              }
            ],
            "type": "AndroidSdk",
            "abstractKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "17f80ec97815b0a2502052582b1178f2",
    "id": null,
    "metadata": {},
    "name": "SDKViewQuery",
    "operationKind": "query",
    "text": "query SDKViewQuery(\n  $id: ID!\n) {\n  node(id: $id) {\n    __typename\n    ... on AndroidSdk {\n      id\n      name\n      description\n      website\n      slug\n      ...SDKViewRankFragment\n      ...SDKViewStatsFragment\n    }\n    id\n  }\n}\n\nfragment SDKViewRankFragment on AndroidSdk {\n  categories(first: 3) {\n    edges {\n      node {\n        name\n        androidSdks(first: 99) {\n          edges {\n            node {\n              id\n              name\n              androidApps(first: 0) {\n                count\n              }\n              iosApps(first: 0) {\n                count\n              }\n            }\n          }\n        }\n        id\n      }\n    }\n  }\n}\n\nfragment SDKViewStatsFragment on AndroidSdk {\n  id\n  name\n  slug\n  androidPopularApps: androidApps(first: 10, sort: [{field: MAX_INSTALLS, direction: DESC}]) {\n    count\n    edges {\n      node {\n        id\n        packageName\n        playstoreData {\n          icon {\n            avif: image(format: AVIF, width: 64, height: 64) {\n              url\n            }\n            webp: image(format: WEBP, width: 64, height: 64) {\n              url\n            }\n          }\n          title\n          released\n          installs\n          id\n        }\n      }\n    }\n  }\n  iosPopularApps: iosApps(first: 10, sort: [{field: MAX_INSTALLS, direction: DESC}]) {\n    count\n    edges {\n      node {\n        id\n        packageName\n        appstoreData {\n          icon {\n            avif: image(format: AVIF, width: 64, height: 64) {\n              url\n            }\n            webp: image(format: WEBP, width: 64, height: 64) {\n              url\n            }\n          }\n          title\n          released\n          installs\n          id\n        }\n      }\n    }\n  }\n  androidLatestApps: androidApps(first: 10, sort: [{field: RELEASED, direction: DESC}]) {\n    edges {\n      node {\n        id\n        packageName\n        playstoreData {\n          icon {\n            avif: image(format: AVIF, width: 64, height: 64) {\n              url\n            }\n            webp: image(format: WEBP, width: 64, height: 64) {\n              url\n            }\n          }\n          title\n          released\n          installs\n          id\n        }\n      }\n    }\n  }\n  iosLatestApps: iosApps(first: 10, sort: [{field: RELEASED, direction: DESC}]) {\n    edges {\n      node {\n        id\n        packageName\n        appstoreData {\n          icon {\n            avif: image(format: AVIF, width: 64, height: 64) {\n              url\n            }\n            webp: image(format: WEBP, width: 64, height: 64) {\n              url\n            }\n          }\n          title\n          released\n          installs\n          id\n        }\n      }\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "1dc15c6d9c0d8db8f2b95e2f7e51bb12";

export default node;
