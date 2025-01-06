/**
 * @generated SignedSource<<f2057767b514728e3c48c29c6afc5082>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type TableItem_androidApp$data = {
  readonly id: string;
  readonly playstoreData: {
    readonly categories: ReadonlyArray<{
      readonly name: string;
    }> | null | undefined;
    readonly developer: {
      readonly name: string;
    } | null | undefined;
    readonly icon: string | null | undefined;
    readonly installs: string | null | undefined;
    readonly title: string | null | undefined;
  } | null | undefined;
  readonly " $fragmentType": "TableItem_androidApp";
};
export type TableItem_androidApp$key = {
  readonly " $data"?: TableItem_androidApp$data;
  readonly " $fragmentSpreads": FragmentRefs<"TableItem_androidApp">;
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
  "name": "TableItem_androidApp",
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
      "concreteType": "PlaystoreAppData",
      "kind": "LinkedField",
      "name": "playstoreData",
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
          "concreteType": "PlaystoreDeveloper",
          "kind": "LinkedField",
          "name": "developer",
          "plural": false,
          "selections": (v0/*: any*/),
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "concreteType": "PlaystoreCategory",
          "kind": "LinkedField",
          "name": "categories",
          "plural": true,
          "selections": (v0/*: any*/),
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "AndroidApp",
  "abstractKey": null
};
})();

(node as any).hash = "6fc2f25a420d9e6e7ba2b485b5864b6e";

export default node;
