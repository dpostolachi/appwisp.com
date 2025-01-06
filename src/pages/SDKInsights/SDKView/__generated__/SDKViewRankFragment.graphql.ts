/**
 * @generated SignedSource<<019cb6e4f467e482b28aeb2a436e259d>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type SDKViewRankFragment$data = {
  readonly categories: {
    readonly edges: ReadonlyArray<{
      readonly node: {
        readonly androidSdks: {
          readonly edges: ReadonlyArray<{
            readonly node: {
              readonly androidApps: {
                readonly count: number;
              } | null | undefined;
              readonly id: string;
              readonly iosApps: {
                readonly count: number;
              } | null | undefined;
              readonly name: string;
            } | null | undefined;
          } | null | undefined> | null | undefined;
        } | null | undefined;
        readonly name: string;
      } | null | undefined;
    } | null | undefined> | null | undefined;
  } | null | undefined;
  readonly " $fragmentType": "SDKViewRankFragment";
};
export type SDKViewRankFragment$key = {
  readonly " $data"?: SDKViewRankFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"SDKViewRankFragment">;
};

const node: ReaderFragment = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v1 = [
  {
    "kind": "Literal",
    "name": "first",
    "value": 0
  }
],
v2 = [
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "count",
    "storageKey": null
  }
];
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "SDKViewRankFragment",
  "selections": [
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
                (v0/*: any*/),
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
                            {
                              "alias": null,
                              "args": null,
                              "kind": "ScalarField",
                              "name": "id",
                              "storageKey": null
                            },
                            (v0/*: any*/),
                            {
                              "alias": null,
                              "args": (v1/*: any*/),
                              "concreteType": "AndroidAppConnection",
                              "kind": "LinkedField",
                              "name": "androidApps",
                              "plural": false,
                              "selections": (v2/*: any*/),
                              "storageKey": "androidApps(first:0)"
                            },
                            {
                              "alias": null,
                              "args": (v1/*: any*/),
                              "concreteType": "IosAppConnection",
                              "kind": "LinkedField",
                              "name": "iosApps",
                              "plural": false,
                              "selections": (v2/*: any*/),
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
                }
              ],
              "storageKey": null
            }
          ],
          "storageKey": null
        }
      ],
      "storageKey": "categories(first:3)"
    }
  ],
  "type": "AndroidSdk",
  "abstractKey": null
};
})();

(node as any).hash = "f0d259032a73f94de60610336444a386";

export default node;
