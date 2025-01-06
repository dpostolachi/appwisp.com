/**
 * @generated SignedSource<<5c7ae3aaabbc7d9f81ed42baeea762d8>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type TableItem_iosApp$data = {
  readonly appstoreData: {
    readonly category: {
      readonly name: string;
    } | null | undefined;
    readonly developer: {
      readonly name: string;
    } | null | undefined;
    readonly icon: string | null | undefined;
    readonly installs: string | null | undefined;
    readonly title: string | null | undefined;
  } | null | undefined;
  readonly id: string;
  readonly " $fragmentType": "TableItem_iosApp";
};
export type TableItem_iosApp$key = {
  readonly " $data"?: TableItem_iosApp$data;
  readonly " $fragmentSpreads": FragmentRefs<"TableItem_iosApp">;
};

const node: ReaderFragment = (function(){
var v0 = [
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "name",
    "storageKey": null
  }
];
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "TableItem_iosApp",
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
      "concreteType": "AppstoreAppData",
      "kind": "LinkedField",
      "name": "appstoreData",
      "plural": false,
      "selections": [
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
          "name": "icon",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "installs",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "concreteType": "AppstoreDeveloper",
          "kind": "LinkedField",
          "name": "developer",
          "plural": false,
          "selections": (v0/*: any*/),
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "concreteType": "AppstoreCategory",
          "kind": "LinkedField",
          "name": "category",
          "plural": false,
          "selections": (v0/*: any*/),
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "IosApp",
  "abstractKey": null
};
})();

(node as any).hash = "e40e39162da5b37ef77149045033f65b";

export default node;
