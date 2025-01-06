/**
 * @generated SignedSource<<b0ba1b645f42da84adf8a91d0c593272>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type HomePageQuery$variables = Record<PropertyKey, never>;
export type HomePageQuery$data = {
  readonly overviewStats: {
    readonly androidApps: number;
    readonly iosApps: number;
    readonly processedApks: number;
    readonly processedIpas: number;
  };
  readonly randomApps: {
    readonly androidApps: ReadonlyArray<{
      readonly playstoreData: {
        readonly icon: {
          readonly avif: {
            readonly url: string;
          };
          readonly webp: {
            readonly url: string;
          };
        } | null | undefined;
        readonly title: string | null | undefined;
      } | null | undefined;
    } | null | undefined>;
    readonly iosApps: ReadonlyArray<{
      readonly appstoreData: {
        readonly icon: {
          readonly avif: {
            readonly url: string;
          };
          readonly webp: {
            readonly url: string;
          };
        } | null | undefined;
        readonly title: string | null | undefined;
      } | null | undefined;
    } | null | undefined>;
  };
};
export type HomePageQuery = {
  response: HomePageQuery$data;
  variables: HomePageQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "concreteType": "OverviewStats",
  "kind": "LinkedField",
  "name": "overviewStats",
  "plural": false,
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "androidApps",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "iosApps",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "processedApks",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "processedIpas",
      "storageKey": null
    }
  ],
  "storageKey": null
},
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "title",
  "storageKey": null
},
v2 = {
  "kind": "Literal",
  "name": "height",
  "value": 64
},
v3 = {
  "kind": "Literal",
  "name": "width",
  "value": 64
},
v4 = [
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "url",
    "storageKey": null
  }
],
v5 = {
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
        (v2/*: any*/),
        (v3/*: any*/)
      ],
      "concreteType": "ImageOutput",
      "kind": "LinkedField",
      "name": "image",
      "plural": false,
      "selections": (v4/*: any*/),
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
        (v2/*: any*/),
        (v3/*: any*/)
      ],
      "concreteType": "ImageOutput",
      "kind": "LinkedField",
      "name": "image",
      "plural": false,
      "selections": (v4/*: any*/),
      "storageKey": "image(format:\"WEBP\",height:64,width:64)"
    }
  ],
  "storageKey": null
},
v6 = [
  (v1/*: any*/),
  (v5/*: any*/)
],
v7 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v8 = [
  (v1/*: any*/),
  (v5/*: any*/),
  (v7/*: any*/)
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "HomePageQuery",
    "selections": [
      (v0/*: any*/),
      {
        "alias": null,
        "args": null,
        "concreteType": "RandomApps",
        "kind": "LinkedField",
        "name": "randomApps",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "AndroidApp",
            "kind": "LinkedField",
            "name": "androidApps",
            "plural": true,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "PlaystoreAppData",
                "kind": "LinkedField",
                "name": "playstoreData",
                "plural": false,
                "selections": (v6/*: any*/),
                "storageKey": null
              }
            ],
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "IosApp",
            "kind": "LinkedField",
            "name": "iosApps",
            "plural": true,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "AppstoreAppData",
                "kind": "LinkedField",
                "name": "appstoreData",
                "plural": false,
                "selections": (v6/*: any*/),
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
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "HomePageQuery",
    "selections": [
      (v0/*: any*/),
      {
        "alias": null,
        "args": null,
        "concreteType": "RandomApps",
        "kind": "LinkedField",
        "name": "randomApps",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "AndroidApp",
            "kind": "LinkedField",
            "name": "androidApps",
            "plural": true,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "PlaystoreAppData",
                "kind": "LinkedField",
                "name": "playstoreData",
                "plural": false,
                "selections": (v8/*: any*/),
                "storageKey": null
              },
              (v7/*: any*/)
            ],
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "IosApp",
            "kind": "LinkedField",
            "name": "iosApps",
            "plural": true,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "AppstoreAppData",
                "kind": "LinkedField",
                "name": "appstoreData",
                "plural": false,
                "selections": (v8/*: any*/),
                "storageKey": null
              },
              (v7/*: any*/)
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "002f91949904efa520e68bd84eb2eda8",
    "id": null,
    "metadata": {},
    "name": "HomePageQuery",
    "operationKind": "query",
    "text": "query HomePageQuery {\n  overviewStats {\n    androidApps\n    iosApps\n    processedApks\n    processedIpas\n  }\n  randomApps {\n    androidApps {\n      playstoreData {\n        title\n        icon {\n          avif: image(width: 64, height: 64, format: AVIF) {\n            url\n          }\n          webp: image(width: 64, height: 64, format: WEBP) {\n            url\n          }\n        }\n        id\n      }\n      id\n    }\n    iosApps {\n      appstoreData {\n        title\n        icon {\n          avif: image(width: 64, height: 64, format: AVIF) {\n            url\n          }\n          webp: image(width: 64, height: 64, format: WEBP) {\n            url\n          }\n        }\n        id\n      }\n      id\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "c3c23d35a076d60def9b966f514fe010";

export default node;
