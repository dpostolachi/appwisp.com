/**
 * @generated SignedSource<<643ba3f59545f11211953110f0cd6e5d>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type SDKItemFragment$data = {
  readonly androidApps: {
    readonly count: number;
  } | null | undefined;
  readonly id: string;
  readonly iosApps: {
    readonly count: number;
  } | null | undefined;
  readonly name: string;
  readonly slug: string;
  readonly " $fragmentType": "SDKItemFragment";
};
export type SDKItemFragment$key = {
  readonly " $data"?: SDKItemFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"SDKItemFragment">;
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
  "name": "SDKItemFragment",
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
    }
  ],
  "type": "AndroidSdk",
  "abstractKey": null
};
})();

(node as any).hash = "34188c3d6cdbcf5f96d8768bef000c3c";

export default node;
