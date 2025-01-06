/**
 * @generated SignedSource<<841fadfd6eede1f31d42b65c3dd041f2>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type AppFiltersSDKs_fragmentSDKCategory$data = {
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
  readonly " $fragmentType": "AppFiltersSDKs_fragmentSDKCategory";
};
export type AppFiltersSDKs_fragmentSDKCategory$key = {
  readonly " $data"?: AppFiltersSDKs_fragmentSDKCategory$data;
  readonly " $fragmentSpreads": FragmentRefs<"AppFiltersSDKs_fragmentSDKCategory">;
};

const node: ReaderFragment = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v1 = {
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
  "name": "AppFiltersSDKs_fragmentSDKCategory",
  "selections": [
    (v0/*: any*/),
    (v1/*: any*/),
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
                (v0/*: any*/),
                (v1/*: any*/),
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
  "type": "AndroidSdkCategory",
  "abstractKey": null
};
})();

(node as any).hash = "8c88a8c6e53581291f4ee806c70f7163";

export default node;
