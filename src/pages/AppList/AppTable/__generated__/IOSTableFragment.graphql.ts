/**
 * @generated SignedSource<<4ad845076666326c1bd4c4d6e5d24193>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type IOSTableFragment$data = {
  readonly edges: ReadonlyArray<{
    readonly node: {
      readonly appstoreData: {
        readonly category: {
          readonly name: string;
        } | null | undefined;
        readonly developer: {
          readonly name: string;
          readonly playstoreDeveloper: {
            readonly countryName: string | null | undefined;
          } | null | undefined;
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
      readonly id: string;
      readonly packageName: string;
    } | null | undefined;
  } | null | undefined> | null | undefined;
  readonly " $fragmentType": "IOSTableFragment";
};
export type IOSTableFragment$key = {
  readonly " $data"?: IOSTableFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"IOSTableFragment">;
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
  "name": "IOSTableFragment",
  "selections": [
    {
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
                  "concreteType": "AppstoreDeveloper",
                  "kind": "LinkedField",
                  "name": "developer",
                  "plural": false,
                  "selections": [
                    {
                      "alias": null,
                      "args": null,
                      "concreteType": "PlaystoreDeveloper",
                      "kind": "LinkedField",
                      "name": "playstoreDeveloper",
                      "plural": false,
                      "selections": [
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
                    (v3/*: any*/)
                  ],
                  "storageKey": null
                },
                {
                  "alias": null,
                  "args": null,
                  "concreteType": "AppstoreCategory",
                  "kind": "LinkedField",
                  "name": "category",
                  "plural": false,
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
  "type": "IosAppConnection",
  "abstractKey": null
};
})();

(node as any).hash = "268ef742925ca51ce231dc84ebfaae42";

export default node;
