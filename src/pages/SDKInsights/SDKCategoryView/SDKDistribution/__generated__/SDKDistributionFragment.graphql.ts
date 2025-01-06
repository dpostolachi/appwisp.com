/**
 * @generated SignedSource<<45c72df0566ec1472ae9265e02b71373>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type SDKDistributionFragment$data = {
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
        readonly " $fragmentSpreads": FragmentRefs<"SDKItemFragment">;
      } | null | undefined;
    } | null | undefined> | null | undefined;
  } | null | undefined;
  readonly name: string;
  readonly totalApps: number;
  readonly " $fragmentType": "SDKDistributionFragment";
};
export type SDKDistributionFragment$key = {
  readonly " $data"?: SDKDistributionFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"SDKDistributionFragment">;
};

const node: ReaderFragment = (function(){
var v0 = [
  {
    "kind": "Literal",
    "name": "first",
    "value": 0
  }
],
v1 = [
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
  "name": "SDKDistributionFragment",
  "selections": [
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
      "name": "totalApps",
      "storageKey": null
    },
    {
      "alias": null,
      "args": [
        {
          "kind": "Literal",
          "name": "first",
          "value": 100
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
                {
                  "alias": null,
                  "args": (v0/*: any*/),
                  "concreteType": "AndroidAppConnection",
                  "kind": "LinkedField",
                  "name": "androidApps",
                  "plural": false,
                  "selections": (v1/*: any*/),
                  "storageKey": "androidApps(first:0)"
                },
                {
                  "alias": null,
                  "args": (v0/*: any*/),
                  "concreteType": "IosAppConnection",
                  "kind": "LinkedField",
                  "name": "iosApps",
                  "plural": false,
                  "selections": (v1/*: any*/),
                  "storageKey": "iosApps(first:0)"
                },
                {
                  "args": null,
                  "kind": "FragmentSpread",
                  "name": "SDKItemFragment"
                }
              ],
              "storageKey": null
            }
          ],
          "storageKey": null
        }
      ],
      "storageKey": "androidSdks(first:100)"
    }
  ],
  "type": "AndroidSdkCategory",
  "abstractKey": null
};
})();

(node as any).hash = "70f145fb5893ad1d4713bae352f414cc";

export default node;
