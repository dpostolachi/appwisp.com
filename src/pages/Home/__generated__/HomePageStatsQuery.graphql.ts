/**
 * @generated SignedSource<<83b900f6f0bbdaa54237e62681a9bd62>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type HomePageStatsQuery$variables = Record<PropertyKey, never>;
export type HomePageStatsQuery$data = {
  readonly overviewStats: {
    readonly androidApps: number;
    readonly iosApps: number;
    readonly processedApks: number;
    readonly processedIpas: number;
  };
};
export type HomePageStatsQuery = {
  response: HomePageStatsQuery$data;
  variables: HomePageStatsQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "OverviewStats",
    "kind": "LinkedField",
    "name": "overviewStats",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "androidApps",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "iosApps",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "processedApks",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "processedIpas",
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "HomePageStatsQuery",
    "selections": (v0/*: any*/),
    "type": "RootQueryType",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "HomePageStatsQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "247f0e716b8727071009a3d79632f4ef",
    "id": null,
    "metadata": {},
    "name": "HomePageStatsQuery",
    "operationKind": "query",
    "text": "query HomePageStatsQuery {\n  overviewStats {\n    androidApps\n    iosApps\n    processedApks\n    processedIpas\n  }\n}\n"
  }
};
})();

(node as any).hash = "0f0df3c997642c05fb796bb4fa202285";

export default node;
