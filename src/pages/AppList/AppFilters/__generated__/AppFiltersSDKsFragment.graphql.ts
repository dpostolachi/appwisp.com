/**
 * @generated SignedSource<<b7c5d686d8911d88990871f77c3f6361>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type AppFiltersSDKsFragment$data = {
  readonly allAndroidSdksCategories: {
    readonly edges: ReadonlyArray<{
      readonly node: {
        readonly androidSdks: {
          readonly edges: ReadonlyArray<{
            readonly node: {
              readonly id: string;
              readonly name: string;
              readonly slug: string;
            } | null | undefined;
          } | null | undefined> | null | undefined;
        } | null | undefined;
        readonly id: string;
        readonly name: string;
        readonly " $fragmentSpreads": FragmentRefs<"AppFiltersSDKs_fragmentSDKCategory">;
      } | null | undefined;
    } | null | undefined> | null | undefined;
  } | null | undefined;
  readonly " $fragmentType": "AppFiltersSDKsFragment";
};
export type AppFiltersSDKsFragment$key = {
  readonly " $data"?: AppFiltersSDKsFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"AppFiltersSDKsFragment">;
};

const node: ReaderFragment = (function(){
var v0 = [
  {
    "kind": "Literal",
    "name": "first",
    "value": 99
  }
],
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
};
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "AppFiltersSDKsFragment",
  "selections": [
    {
      "alias": null,
      "args": (v0/*: any*/),
      "concreteType": "AndroidSdkCategoryConnection",
      "kind": "LinkedField",
      "name": "allAndroidSdksCategories",
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
                (v1/*: any*/),
                (v2/*: any*/),
                {
                  "args": null,
                  "kind": "FragmentSpread",
                  "name": "AppFiltersSDKs_fragmentSDKCategory"
                },
                {
                  "alias": null,
                  "args": (v0/*: any*/),
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
                            (v1/*: any*/),
                            (v2/*: any*/),
                            {
                              "alias": null,
                              "args": null,
                              "kind": "ScalarField",
                              "name": "slug",
                              "storageKey": null
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
      "storageKey": "allAndroidSdksCategories(first:99)"
    }
  ],
  "type": "RootQueryType",
  "abstractKey": null
};
})();

(node as any).hash = "e7e78379cd1a4d8d281d0bf45c0743f6";

export default node;
