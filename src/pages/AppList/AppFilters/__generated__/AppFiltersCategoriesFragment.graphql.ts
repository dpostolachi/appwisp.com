/**
 * @generated SignedSource<<57a1b7b2cb981d66cd0df826873020d0>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type AppFiltersCategoriesFragment$data = {
  readonly allAppstoreCategories: {
    readonly edges: ReadonlyArray<{
      readonly node: {
        readonly id: string;
        readonly name: string;
      } | null | undefined;
    } | null | undefined> | null | undefined;
  } | null | undefined;
  readonly allPlaystoreCategories: {
    readonly edges: ReadonlyArray<{
      readonly node: {
        readonly id: string;
        readonly name: string;
      } | null | undefined;
    } | null | undefined> | null | undefined;
  } | null | undefined;
  readonly " $fragmentType": "AppFiltersCategoriesFragment";
};
export type AppFiltersCategoriesFragment$key = {
  readonly " $data"?: AppFiltersCategoriesFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"AppFiltersCategoriesFragment">;
};

const node: ReaderFragment = (function(){
var v0 = [
  {
    "kind": "Literal",
    "name": "first",
    "value": 99
  }
],
v1 = [
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
  }
];
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "AppFiltersCategoriesFragment",
  "selections": [
    {
      "alias": null,
      "args": (v0/*: any*/),
      "concreteType": "PlaystoreCategoryConnection",
      "kind": "LinkedField",
      "name": "allPlaystoreCategories",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "concreteType": "PlaystoreCategoryEdge",
          "kind": "LinkedField",
          "name": "edges",
          "plural": true,
          "selections": [
            {
              "alias": null,
              "args": null,
              "concreteType": "PlaystoreCategory",
              "kind": "LinkedField",
              "name": "node",
              "plural": false,
              "selections": (v1/*: any*/),
              "storageKey": null
            }
          ],
          "storageKey": null
        }
      ],
      "storageKey": "allPlaystoreCategories(first:99)"
    },
    {
      "alias": null,
      "args": (v0/*: any*/),
      "concreteType": "AppstoreCategoryConnection",
      "kind": "LinkedField",
      "name": "allAppstoreCategories",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "concreteType": "AppstoreCategoryEdge",
          "kind": "LinkedField",
          "name": "edges",
          "plural": true,
          "selections": [
            {
              "alias": null,
              "args": null,
              "concreteType": "AppstoreCategory",
              "kind": "LinkedField",
              "name": "node",
              "plural": false,
              "selections": (v1/*: any*/),
              "storageKey": null
            }
          ],
          "storageKey": null
        }
      ],
      "storageKey": "allAppstoreCategories(first:99)"
    }
  ],
  "type": "RootQueryType",
  "abstractKey": null
};
})();

(node as any).hash = "02671670f9e6d58aa75b5a19467e8f54";

export default node;
