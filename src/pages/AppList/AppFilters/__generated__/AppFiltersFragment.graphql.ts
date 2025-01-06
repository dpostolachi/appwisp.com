/**
 * @generated SignedSource<<283eefcabd8cfac11a91bbe7e8f7072d>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type AppFiltersFragment$data = {
  readonly " $fragmentSpreads": FragmentRefs<"AppFiltersCategoriesFragment" | "AppFiltersSDKsFragment">;
  readonly " $fragmentType": "AppFiltersFragment";
};
export type AppFiltersFragment$key = {
  readonly " $data"?: AppFiltersFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"AppFiltersFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "AppFiltersFragment",
  "selections": [
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "AppFiltersCategoriesFragment"
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "AppFiltersSDKsFragment"
    }
  ],
  "type": "RootQueryType",
  "abstractKey": null
};

(node as any).hash = "9574cf1f4ce12a16759bf186b03a1f6d";

export default node;
