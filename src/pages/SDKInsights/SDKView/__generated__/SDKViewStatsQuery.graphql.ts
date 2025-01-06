/**
 * @generated SignedSource<<402029d5c5c82f191d155fe6a16aaabd>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type SDKViewStatsQuery$variables = {
  id: string;
};
export type SDKViewStatsQuery$data = {
  readonly node: {
    readonly androidLatestApps?: {
      readonly edges: ReadonlyArray<{
        readonly node: {
          readonly id: string;
          readonly packageName: string;
          readonly playstoreData: {
            readonly icon: {
              readonly avif: {
                readonly url: string;
              };
              readonly webp: {
                readonly url: string;
              };
            } | null | undefined;
            readonly installs: string | null | undefined;
            readonly released: any | null | undefined;
            readonly title: string | null | undefined;
          } | null | undefined;
        } | null | undefined;
      } | null | undefined> | null | undefined;
    } | null | undefined;
    readonly androidPopularApps?: {
      readonly count: number;
      readonly edges: ReadonlyArray<{
        readonly node: {
          readonly id: string;
          readonly packageName: string;
          readonly playstoreData: {
            readonly icon: {
              readonly avif: {
                readonly url: string;
              };
              readonly webp: {
                readonly url: string;
              };
            } | null | undefined;
            readonly installs: string | null | undefined;
            readonly released: any | null | undefined;
            readonly title: string | null | undefined;
          } | null | undefined;
        } | null | undefined;
      } | null | undefined> | null | undefined;
    } | null | undefined;
    readonly id?: string;
    readonly iosLatestApps?: {
      readonly edges: ReadonlyArray<{
        readonly node: {
          readonly appstoreData: {
            readonly icon: {
              readonly avif: {
                readonly url: string;
              };
              readonly webp: {
                readonly url: string;
              };
            } | null | undefined;
            readonly installs: string | null | undefined;
            readonly released: any | null | undefined;
            readonly title: string | null | undefined;
          } | null | undefined;
          readonly id: string;
          readonly packageName: string;
        } | null | undefined;
      } | null | undefined> | null | undefined;
    } | null | undefined;
    readonly iosPopularApps?: {
      readonly count: number;
      readonly edges: ReadonlyArray<{
        readonly node: {
          readonly appstoreData: {
            readonly icon: {
              readonly avif: {
                readonly url: string;
              };
              readonly webp: {
                readonly url: string;
              };
            } | null | undefined;
            readonly installs: string | null | undefined;
            readonly released: any | null | undefined;
            readonly title: string | null | undefined;
          } | null | undefined;
          readonly id: string;
          readonly packageName: string;
        } | null | undefined;
      } | null | undefined> | null | undefined;
    } | null | undefined;
    readonly name?: string;
    readonly slug?: string;
  } | null | undefined;
};
export type SDKViewStatsQuery = {
  response: SDKViewStatsQuery$data;
  variables: SDKViewStatsQuery$variables;
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
  "name": "slug",
  "storageKey": null
},
v5 = {
  "kind": "Literal",
  "name": "first",
  "value": 10
},
v6 = [
  (v5/*: any*/),
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
  "name": "packageName",
  "storageKey": null
},
v9 = {
  "kind": "Literal",
  "name": "height",
  "value": 64
},
v10 = {
  "kind": "Literal",
  "name": "width",
  "value": 64
},
v11 = [
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "url",
    "storageKey": null
  }
],
v12 = {
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
        (v9/*: any*/),
        (v10/*: any*/)
      ],
      "concreteType": "ImageOutput",
      "kind": "LinkedField",
      "name": "image",
      "plural": false,
      "selections": (v11/*: any*/),
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
        (v9/*: any*/),
        (v10/*: any*/)
      ],
      "concreteType": "ImageOutput",
      "kind": "LinkedField",
      "name": "image",
      "plural": false,
      "selections": (v11/*: any*/),
      "storageKey": "image(format:\"WEBP\",height:64,width:64)"
    }
  ],
  "storageKey": null
},
v13 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "title",
  "storageKey": null
},
v14 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "released",
  "storageKey": null
},
v15 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "installs",
  "storageKey": null
},
v16 = [
  (v12/*: any*/),
  (v13/*: any*/),
  (v14/*: any*/),
  (v15/*: any*/)
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
        (v8/*: any*/),
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
        (v8/*: any*/),
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
  (v5/*: any*/),
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
],
v20 = [
  (v12/*: any*/),
  (v13/*: any*/),
  (v14/*: any*/),
  (v15/*: any*/),
  (v2/*: any*/)
],
v21 = {
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
        (v8/*: any*/),
        {
          "alias": null,
          "args": null,
          "concreteType": "PlaystoreAppData",
          "kind": "LinkedField",
          "name": "playstoreData",
          "plural": false,
          "selections": (v20/*: any*/),
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "storageKey": null
},
v22 = {
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
        (v8/*: any*/),
        {
          "alias": null,
          "args": null,
          "concreteType": "AppstoreAppData",
          "kind": "LinkedField",
          "name": "appstoreData",
          "plural": false,
          "selections": (v20/*: any*/),
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "SDKViewStatsQuery",
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
              {
                "alias": "androidPopularApps",
                "args": (v6/*: any*/),
                "concreteType": "AndroidAppConnection",
                "kind": "LinkedField",
                "name": "androidApps",
                "plural": false,
                "selections": [
                  (v7/*: any*/),
                  (v17/*: any*/)
                ],
                "storageKey": "androidApps(first:10,sort:[{\"direction\":\"DESC\",\"field\":\"MAX_INSTALLS\"}])"
              },
              {
                "alias": "iosPopularApps",
                "args": (v6/*: any*/),
                "concreteType": "IosAppConnection",
                "kind": "LinkedField",
                "name": "iosApps",
                "plural": false,
                "selections": [
                  (v7/*: any*/),
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
    ],
    "type": "RootQueryType",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "SDKViewStatsQuery",
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
              {
                "alias": "androidPopularApps",
                "args": (v6/*: any*/),
                "concreteType": "AndroidAppConnection",
                "kind": "LinkedField",
                "name": "androidApps",
                "plural": false,
                "selections": [
                  (v7/*: any*/),
                  (v21/*: any*/)
                ],
                "storageKey": "androidApps(first:10,sort:[{\"direction\":\"DESC\",\"field\":\"MAX_INSTALLS\"}])"
              },
              {
                "alias": "iosPopularApps",
                "args": (v6/*: any*/),
                "concreteType": "IosAppConnection",
                "kind": "LinkedField",
                "name": "iosApps",
                "plural": false,
                "selections": [
                  (v7/*: any*/),
                  (v22/*: any*/)
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
                  (v21/*: any*/)
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
                  (v22/*: any*/)
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
    "cacheID": "dfe1a613c46d8c6457c17357a0f26f33",
    "id": null,
    "metadata": {},
    "name": "SDKViewStatsQuery",
    "operationKind": "query",
    "text": "query SDKViewStatsQuery(\n  $id: ID!\n) {\n  node(id: $id) {\n    __typename\n    ... on AndroidSdk {\n      id\n      name\n      slug\n      androidPopularApps: androidApps(first: 10, sort: [{field: MAX_INSTALLS, direction: DESC}]) {\n        count\n        edges {\n          node {\n            id\n            packageName\n            playstoreData {\n              icon {\n                avif: image(format: AVIF, width: 64, height: 64) {\n                  url\n                }\n                webp: image(format: WEBP, width: 64, height: 64) {\n                  url\n                }\n              }\n              title\n              released\n              installs\n              id\n            }\n          }\n        }\n      }\n      iosPopularApps: iosApps(first: 10, sort: [{field: MAX_INSTALLS, direction: DESC}]) {\n        count\n        edges {\n          node {\n            id\n            packageName\n            appstoreData {\n              icon {\n                avif: image(format: AVIF, width: 64, height: 64) {\n                  url\n                }\n                webp: image(format: WEBP, width: 64, height: 64) {\n                  url\n                }\n              }\n              title\n              released\n              installs\n              id\n            }\n          }\n        }\n      }\n      androidLatestApps: androidApps(first: 10, sort: [{field: RELEASED, direction: DESC}]) {\n        edges {\n          node {\n            id\n            packageName\n            playstoreData {\n              icon {\n                avif: image(format: AVIF, width: 64, height: 64) {\n                  url\n                }\n                webp: image(format: WEBP, width: 64, height: 64) {\n                  url\n                }\n              }\n              title\n              released\n              installs\n              id\n            }\n          }\n        }\n      }\n      iosLatestApps: iosApps(first: 10, sort: [{field: RELEASED, direction: DESC}]) {\n        edges {\n          node {\n            id\n            packageName\n            appstoreData {\n              icon {\n                avif: image(format: AVIF, width: 64, height: 64) {\n                  url\n                }\n                webp: image(format: WEBP, width: 64, height: 64) {\n                  url\n                }\n              }\n              title\n              released\n              installs\n              id\n            }\n          }\n        }\n      }\n    }\n    id\n  }\n}\n"
  }
};
})();

(node as any).hash = "df7f1203d6a04c90415ac30589122b8d";

export default node;
