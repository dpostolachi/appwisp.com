/**
 * @generated SignedSource<<4603bbe72b5047140d8dcc570d50083d>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type SDKViewStatsFragment$data = {
  readonly androidLatestApps: {
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
  readonly androidPopularApps: {
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
  readonly id: string;
  readonly iosLatestApps: {
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
  readonly iosPopularApps: {
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
  readonly name: string;
  readonly slug: string;
  readonly " $fragmentType": "SDKViewStatsFragment";
};
export type SDKViewStatsFragment$key = {
  readonly " $data"?: SDKViewStatsFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"SDKViewStatsFragment">;
};

const node: ReaderFragment = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v1 = {
  "kind": "Literal",
  "name": "first",
  "value": 10
},
v2 = [
  (v1/*: any*/),
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
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "count",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "packageName",
  "storageKey": null
},
v5 = {
  "kind": "Literal",
  "name": "height",
  "value": 64
},
v6 = {
  "kind": "Literal",
  "name": "width",
  "value": 64
},
v7 = [
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "url",
    "storageKey": null
  }
],
v8 = [
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
          (v5/*: any*/),
          (v6/*: any*/)
        ],
        "concreteType": "ImageOutput",
        "kind": "LinkedField",
        "name": "image",
        "plural": false,
        "selections": (v7/*: any*/),
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
          (v5/*: any*/),
          (v6/*: any*/)
        ],
        "concreteType": "ImageOutput",
        "kind": "LinkedField",
        "name": "image",
        "plural": false,
        "selections": (v7/*: any*/),
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
  }
],
v9 = {
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
        (v0/*: any*/),
        (v4/*: any*/),
        {
          "alias": null,
          "args": null,
          "concreteType": "PlaystoreAppData",
          "kind": "LinkedField",
          "name": "playstoreData",
          "plural": false,
          "selections": (v8/*: any*/),
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "storageKey": null
},
v10 = {
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
        (v0/*: any*/),
        (v4/*: any*/),
        {
          "alias": null,
          "args": null,
          "concreteType": "AppstoreAppData",
          "kind": "LinkedField",
          "name": "appstoreData",
          "plural": false,
          "selections": (v8/*: any*/),
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "storageKey": null
},
v11 = [
  (v1/*: any*/),
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
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "SDKViewStatsFragment",
  "selections": [
    (v0/*: any*/),
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "name",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "slug",
      "storageKey": null
    },
    {
      "alias": "androidPopularApps",
      "args": (v2/*: any*/),
      "concreteType": "AndroidAppConnection",
      "kind": "LinkedField",
      "name": "androidApps",
      "plural": false,
      "selections": [
        (v3/*: any*/),
        (v9/*: any*/)
      ],
      "storageKey": "androidApps(first:10,sort:[{\"direction\":\"DESC\",\"field\":\"MAX_INSTALLS\"}])"
    },
    {
      "alias": "iosPopularApps",
      "args": (v2/*: any*/),
      "concreteType": "IosAppConnection",
      "kind": "LinkedField",
      "name": "iosApps",
      "plural": false,
      "selections": [
        (v3/*: any*/),
        (v10/*: any*/)
      ],
      "storageKey": "iosApps(first:10,sort:[{\"direction\":\"DESC\",\"field\":\"MAX_INSTALLS\"}])"
    },
    {
      "alias": "androidLatestApps",
      "args": (v11/*: any*/),
      "concreteType": "AndroidAppConnection",
      "kind": "LinkedField",
      "name": "androidApps",
      "plural": false,
      "selections": [
        (v9/*: any*/)
      ],
      "storageKey": "androidApps(first:10,sort:[{\"direction\":\"DESC\",\"field\":\"RELEASED\"}])"
    },
    {
      "alias": "iosLatestApps",
      "args": (v11/*: any*/),
      "concreteType": "IosAppConnection",
      "kind": "LinkedField",
      "name": "iosApps",
      "plural": false,
      "selections": [
        (v10/*: any*/)
      ],
      "storageKey": "iosApps(first:10,sort:[{\"direction\":\"DESC\",\"field\":\"RELEASED\"}])"
    }
  ],
  "type": "AndroidSdk",
  "abstractKey": null
};
})();

(node as any).hash = "956c6caeb33b1a4922f06b6cb8af8c9d";

export default node;
