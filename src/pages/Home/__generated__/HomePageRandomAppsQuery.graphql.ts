/**
 * @generated SignedSource<<1f7600603c4b4ee77efff2442de163bc>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type HomePageRandomAppsQuery$variables = Record<PropertyKey, never>;
export type HomePageRandomAppsQuery$data = {
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
export type HomePageRandomAppsQuery = {
  response: HomePageRandomAppsQuery$data;
  variables: HomePageRandomAppsQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "title",
  "storageKey": null
},
v1 = {
  "kind": "Literal",
  "name": "height",
  "value": 64
},
v2 = {
  "kind": "Literal",
  "name": "width",
  "value": 64
},
v3 = [
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "url",
    "storageKey": null
  }
],
v4 = {
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
        (v1/*: any*/),
        (v2/*: any*/)
      ],
      "concreteType": "ImageOutput",
      "kind": "LinkedField",
      "name": "image",
      "plural": false,
      "selections": (v3/*: any*/),
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
        (v1/*: any*/),
        (v2/*: any*/)
      ],
      "concreteType": "ImageOutput",
      "kind": "LinkedField",
      "name": "image",
      "plural": false,
      "selections": (v3/*: any*/),
      "storageKey": "image(format:\"WEBP\",height:64,width:64)"
    }
  ],
  "storageKey": null
},
v5 = [
  (v0/*: any*/),
  (v4/*: any*/)
],
v6 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v7 = [
  (v0/*: any*/),
  (v4/*: any*/),
  (v6/*: any*/)
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "HomePageRandomAppsQuery",
    "selections": [
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
                "selections": (v5/*: any*/),
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
                "selections": (v5/*: any*/),
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
    "name": "HomePageRandomAppsQuery",
    "selections": [
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
                "selections": (v7/*: any*/),
                "storageKey": null
              },
              (v6/*: any*/)
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
                "selections": (v7/*: any*/),
                "storageKey": null
              },
              (v6/*: any*/)
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "8628f77ed67cb16f8b0e6587f85bc489",
    "id": null,
    "metadata": {},
    "name": "HomePageRandomAppsQuery",
    "operationKind": "query",
    "text": "query HomePageRandomAppsQuery {\n  randomApps {\n    androidApps {\n      playstoreData {\n        title\n        icon {\n          avif: image(width: 64, height: 64, format: AVIF) {\n            url\n          }\n          webp: image(width: 64, height: 64, format: WEBP) {\n            url\n          }\n        }\n        id\n      }\n      id\n    }\n    iosApps {\n      appstoreData {\n        title\n        icon {\n          avif: image(width: 64, height: 64, format: AVIF) {\n            url\n          }\n          webp: image(width: 64, height: 64, format: WEBP) {\n            url\n          }\n        }\n        id\n      }\n      id\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "eb3476ab8ece5c39206b2b6b98efee2c";

export default node;
