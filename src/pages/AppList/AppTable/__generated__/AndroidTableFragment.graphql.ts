/**
 * @generated SignedSource<<c836a70f71b210110593af54054296a6>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type AndroidTableFragment$data = {
  readonly edges: ReadonlyArray<{
    readonly node: {
      readonly id: string;
      readonly packageName: string;
      readonly playstoreData: {
        readonly categories: ReadonlyArray<{
          readonly name: string;
        }> | null | undefined;
        readonly developer: {
          readonly countryName: string | null | undefined;
          readonly name: string;
        } | null | undefined;
        readonly icon: {
          readonly avif: {
            readonly url: string;
          };
          readonly webp: {
            readonly url: string;
          };
        } | null | undefined;
        readonly installs: string | null | undefined;
        readonly title: string | null | undefined;
      } | null | undefined;
    } | null | undefined;
  } | null | undefined> | null | undefined;
  readonly " $fragmentType": "AndroidTableFragment";
};
export type AndroidTableFragment$key = {
  readonly " $data"?: AndroidTableFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"AndroidTableFragment">;
};

const node: ReaderFragment = (function(){
var v0 = {
  "kind": "Literal",
  "name": "height",
  "value": 64
},
v1 = {
  "kind": "Literal",
  "name": "width",
  "value": 64
},
v2 = [
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "url",
    "storageKey": null
  }
],
v3 = {
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
  "name": "AndroidTableFragment",
  "selections": [
    {
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
              "name": "packageName",
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
                        (v0/*: any*/),
                        (v1/*: any*/)
                      ],
                      "concreteType": "ImageOutput",
                      "kind": "LinkedField",
                      "name": "image",
                      "plural": false,
                      "selections": (v2/*: any*/),
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
                        (v0/*: any*/),
                        (v1/*: any*/)
                      ],
                      "concreteType": "ImageOutput",
                      "kind": "LinkedField",
                      "name": "image",
                      "plural": false,
                      "selections": (v2/*: any*/),
                      "storageKey": "image(format:\"WEBP\",height:64,width:64)"
                    }
                  ],
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
                  "selections": [
                    (v3/*: any*/),
                    {
                      "alias": null,
                      "args": null,
                      "kind": "ScalarField",
                      "name": "countryName",
                      "storageKey": null
                    }
                  ],
                  "storageKey": null
                },
                {
                  "alias": null,
                  "args": null,
                  "concreteType": "PlaystoreCategory",
                  "kind": "LinkedField",
                  "name": "categories",
                  "plural": true,
                  "selections": [
                    (v3/*: any*/)
                  ],
                  "storageKey": null
                }
              ],
              "storageKey": null
            }
          ],
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "AndroidAppConnection",
  "abstractKey": null
};
})();

(node as any).hash = "9cbd4d79b9e17320ce90f6adc0d62585";

export default node;
