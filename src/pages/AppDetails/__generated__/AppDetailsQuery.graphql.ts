/**
 * @generated SignedSource<<894ee867d3af06461b7f52de74acdab5>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type AppDetailsQuery$variables = {
  id: string;
};
export type AppDetailsQuery$data = {
  readonly node: {
    readonly __typename: "AndroidApp";
    readonly androidSdks: {
      readonly edges: ReadonlyArray<{
        readonly node: {
          readonly id: string;
          readonly name: string;
          readonly slug: string;
        } | null | undefined;
      } | null | undefined> | null | undefined;
    } | null | undefined;
    readonly playstoreData: {
      readonly categories: ReadonlyArray<{
        readonly name: string;
      }> | null | undefined;
      readonly description: string | null | undefined;
      readonly descriptionHtml: string | null | undefined;
      readonly developer: {
        readonly address: string | null | undefined;
        readonly countryName: string | null | undefined;
        readonly email: string | null | undefined;
        readonly name: string;
        readonly website: string | null | undefined;
      } | null | undefined;
      readonly developerEmail: string | null | undefined;
      readonly headerImage: {
        readonly avif: {
          readonly url: string;
        };
        readonly webp: {
          readonly url: string;
        };
      } | null | undefined;
      readonly maxInstalls: number | null | undefined;
      readonly packageName: string;
      readonly released: any | null | undefined;
      readonly reviews: number | null | undefined;
      readonly score: number | null | undefined;
      readonly screenshots: ReadonlyArray<{
        readonly avif: {
          readonly url: string;
        };
        readonly webp: {
          readonly url: string;
        };
      }> | null | undefined;
      readonly title: string | null | undefined;
      readonly updated: any | null | undefined;
    } | null | undefined;
  } | {
    readonly __typename: "IosApp";
    readonly appstoreData: {
      readonly category: {
        readonly name: string;
      } | null | undefined;
      readonly description: string | null | undefined;
      readonly developer: {
        readonly name: string;
        readonly playstoreDeveloper: {
          readonly address: string | null | undefined;
          readonly countryName: string | null | undefined;
          readonly email: string | null | undefined;
          readonly website: string | null | undefined;
        } | null | undefined;
        readonly url: string | null | undefined;
        readonly website: string | null | undefined;
      } | null | undefined;
      readonly installs: string | null | undefined;
      readonly packageName: string;
      readonly released: any | null | undefined;
      readonly score: number | null | undefined;
      readonly scoreCount: number | null | undefined;
      readonly screenshots: ReadonlyArray<{
        readonly avif: {
          readonly url: string;
        };
        readonly webp: {
          readonly url: string;
        };
      }> | null | undefined;
      readonly title: string | null | undefined;
      readonly updated: any | null | undefined;
    } | null | undefined;
    readonly iosSdks: {
      readonly edges: ReadonlyArray<{
        readonly node: {
          readonly id: string;
          readonly name: string;
          readonly slug: string;
        } | null | undefined;
      } | null | undefined> | null | undefined;
    } | null | undefined;
  } | {
    // This will never be '%other', but we need some
    // value in case none of the concrete values match.
    readonly __typename: "%other";
  } | null | undefined;
};
export type AppDetailsQuery = {
  response: AppDetailsQuery$data;
  variables: AppDetailsQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "id"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "id"
  }
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "__typename",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "packageName",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "title",
  "storageKey": null
},
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "maxInstalls",
  "storageKey": null
},
v6 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "score",
  "storageKey": null
},
v7 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "reviews",
  "storageKey": null
},
v8 = {
  "kind": "Literal",
  "name": "format",
  "value": "AVIF"
},
v9 = {
  "kind": "Literal",
  "name": "height",
  "value": 292
},
v10 = {
  "kind": "Literal",
  "name": "width",
  "value": 600
},
v11 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "url",
  "storageKey": null
},
v12 = [
  (v11/*: any*/)
],
v13 = {
  "kind": "Literal",
  "name": "format",
  "value": "WEBP"
},
v14 = {
  "alias": null,
  "args": null,
  "concreteType": "Image",
  "kind": "LinkedField",
  "name": "headerImage",
  "plural": false,
  "selections": [
    {
      "alias": "avif",
      "args": [
        (v8/*: any*/),
        (v9/*: any*/),
        (v10/*: any*/)
      ],
      "concreteType": "ImageOutput",
      "kind": "LinkedField",
      "name": "image",
      "plural": false,
      "selections": (v12/*: any*/),
      "storageKey": "image(format:\"AVIF\",height:292,width:600)"
    },
    {
      "alias": "webp",
      "args": [
        (v13/*: any*/),
        (v9/*: any*/),
        (v10/*: any*/)
      ],
      "concreteType": "ImageOutput",
      "kind": "LinkedField",
      "name": "image",
      "plural": false,
      "selections": (v12/*: any*/),
      "storageKey": "image(format:\"WEBP\",height:292,width:600)"
    }
  ],
  "storageKey": null
},
v15 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "description",
  "storageKey": null
},
v16 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "descriptionHtml",
  "storageKey": null
},
v17 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "released",
  "storageKey": null
},
v18 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "updated",
  "storageKey": null
},
v19 = {
  "kind": "Literal",
  "name": "height",
  "value": 592
},
v20 = {
  "kind": "Literal",
  "name": "width",
  "value": 333
},
v21 = {
  "alias": null,
  "args": null,
  "concreteType": "Image",
  "kind": "LinkedField",
  "name": "screenshots",
  "plural": true,
  "selections": [
    {
      "alias": "avif",
      "args": [
        (v8/*: any*/),
        (v19/*: any*/),
        (v20/*: any*/)
      ],
      "concreteType": "ImageOutput",
      "kind": "LinkedField",
      "name": "image",
      "plural": false,
      "selections": (v12/*: any*/),
      "storageKey": "image(format:\"AVIF\",height:592,width:333)"
    },
    {
      "alias": "webp",
      "args": [
        (v13/*: any*/),
        (v19/*: any*/),
        (v20/*: any*/)
      ],
      "concreteType": "ImageOutput",
      "kind": "LinkedField",
      "name": "image",
      "plural": false,
      "selections": (v12/*: any*/),
      "storageKey": "image(format:\"WEBP\",height:592,width:333)"
    }
  ],
  "storageKey": null
},
v22 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v23 = [
  (v22/*: any*/)
],
v24 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "email",
  "storageKey": null
},
v25 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "address",
  "storageKey": null
},
v26 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "website",
  "storageKey": null
},
v27 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "countryName",
  "storageKey": null
},
v28 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "developerEmail",
  "storageKey": null
},
v29 = [
  {
    "kind": "Literal",
    "name": "first",
    "value": 100
  }
],
v30 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v31 = [
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
          (v30/*: any*/),
          (v22/*: any*/),
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
v32 = {
  "alias": null,
  "args": (v29/*: any*/),
  "concreteType": "AndroidSdkConnection",
  "kind": "LinkedField",
  "name": "androidSdks",
  "plural": false,
  "selections": (v31/*: any*/),
  "storageKey": "androidSdks(first:100)"
},
v33 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "installs",
  "storageKey": null
},
v34 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "scoreCount",
  "storageKey": null
},
v35 = {
  "alias": null,
  "args": (v29/*: any*/),
  "concreteType": "AndroidSdkConnection",
  "kind": "LinkedField",
  "name": "iosSdks",
  "plural": false,
  "selections": (v31/*: any*/),
  "storageKey": "iosSdks(first:100)"
},
v36 = [
  (v22/*: any*/),
  (v30/*: any*/)
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "AppDetailsQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": null,
        "kind": "LinkedField",
        "name": "node",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          {
            "kind": "InlineFragment",
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "PlaystoreAppData",
                "kind": "LinkedField",
                "name": "playstoreData",
                "plural": false,
                "selections": [
                  (v3/*: any*/),
                  (v4/*: any*/),
                  (v5/*: any*/),
                  (v6/*: any*/),
                  (v7/*: any*/),
                  (v14/*: any*/),
                  (v15/*: any*/),
                  (v16/*: any*/),
                  (v17/*: any*/),
                  (v18/*: any*/),
                  (v21/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "PlaystoreCategory",
                    "kind": "LinkedField",
                    "name": "categories",
                    "plural": true,
                    "selections": (v23/*: any*/),
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
                      (v22/*: any*/),
                      (v24/*: any*/),
                      (v25/*: any*/),
                      (v26/*: any*/),
                      (v27/*: any*/)
                    ],
                    "storageKey": null
                  },
                  (v28/*: any*/)
                ],
                "storageKey": null
              },
              (v32/*: any*/)
            ],
            "type": "AndroidApp",
            "abstractKey": null
          },
          {
            "kind": "InlineFragment",
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "AppstoreAppData",
                "kind": "LinkedField",
                "name": "appstoreData",
                "plural": false,
                "selections": [
                  (v3/*: any*/),
                  (v4/*: any*/),
                  (v33/*: any*/),
                  (v6/*: any*/),
                  (v15/*: any*/),
                  (v17/*: any*/),
                  (v18/*: any*/),
                  (v34/*: any*/),
                  (v21/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "AppstoreCategory",
                    "kind": "LinkedField",
                    "name": "category",
                    "plural": false,
                    "selections": (v23/*: any*/),
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
                      (v22/*: any*/),
                      (v11/*: any*/),
                      (v26/*: any*/),
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "PlaystoreDeveloper",
                        "kind": "LinkedField",
                        "name": "playstoreDeveloper",
                        "plural": false,
                        "selections": [
                          (v27/*: any*/),
                          (v25/*: any*/),
                          (v24/*: any*/),
                          (v26/*: any*/)
                        ],
                        "storageKey": null
                      }
                    ],
                    "storageKey": null
                  }
                ],
                "storageKey": null
              },
              (v35/*: any*/)
            ],
            "type": "IosApp",
            "abstractKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "type": "RootQueryType",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "AppDetailsQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": null,
        "kind": "LinkedField",
        "name": "node",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          {
            "kind": "InlineFragment",
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "PlaystoreAppData",
                "kind": "LinkedField",
                "name": "playstoreData",
                "plural": false,
                "selections": [
                  (v3/*: any*/),
                  (v4/*: any*/),
                  (v5/*: any*/),
                  (v6/*: any*/),
                  (v7/*: any*/),
                  (v14/*: any*/),
                  (v15/*: any*/),
                  (v16/*: any*/),
                  (v17/*: any*/),
                  (v18/*: any*/),
                  (v21/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "PlaystoreCategory",
                    "kind": "LinkedField",
                    "name": "categories",
                    "plural": true,
                    "selections": (v36/*: any*/),
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
                      (v22/*: any*/),
                      (v24/*: any*/),
                      (v25/*: any*/),
                      (v26/*: any*/),
                      (v27/*: any*/),
                      (v30/*: any*/)
                    ],
                    "storageKey": null
                  },
                  (v28/*: any*/),
                  (v30/*: any*/)
                ],
                "storageKey": null
              },
              (v32/*: any*/)
            ],
            "type": "AndroidApp",
            "abstractKey": null
          },
          {
            "kind": "InlineFragment",
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "AppstoreAppData",
                "kind": "LinkedField",
                "name": "appstoreData",
                "plural": false,
                "selections": [
                  (v3/*: any*/),
                  (v4/*: any*/),
                  (v33/*: any*/),
                  (v6/*: any*/),
                  (v15/*: any*/),
                  (v17/*: any*/),
                  (v18/*: any*/),
                  (v34/*: any*/),
                  (v21/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "AppstoreCategory",
                    "kind": "LinkedField",
                    "name": "category",
                    "plural": false,
                    "selections": (v36/*: any*/),
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
                      (v22/*: any*/),
                      (v11/*: any*/),
                      (v26/*: any*/),
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "PlaystoreDeveloper",
                        "kind": "LinkedField",
                        "name": "playstoreDeveloper",
                        "plural": false,
                        "selections": [
                          (v27/*: any*/),
                          (v25/*: any*/),
                          (v24/*: any*/),
                          (v26/*: any*/),
                          (v30/*: any*/)
                        ],
                        "storageKey": null
                      },
                      (v30/*: any*/)
                    ],
                    "storageKey": null
                  },
                  (v30/*: any*/)
                ],
                "storageKey": null
              },
              (v35/*: any*/)
            ],
            "type": "IosApp",
            "abstractKey": null
          },
          (v30/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "9b15b708b4120034e63e2649a9c521ec",
    "id": null,
    "metadata": {},
    "name": "AppDetailsQuery",
    "operationKind": "query",
    "text": "query AppDetailsQuery(\n  $id: ID!\n) {\n  node(id: $id) {\n    __typename\n    ... on AndroidApp {\n      playstoreData {\n        packageName\n        title\n        maxInstalls\n        score\n        reviews\n        headerImage {\n          avif: image(format: AVIF, width: 600, height: 292) {\n            url\n          }\n          webp: image(format: WEBP, width: 600, height: 292) {\n            url\n          }\n        }\n        description\n        descriptionHtml\n        released\n        updated\n        screenshots {\n          avif: image(format: AVIF, width: 333, height: 592) {\n            url\n          }\n          webp: image(format: WEBP, width: 333, height: 592) {\n            url\n          }\n        }\n        categories {\n          name\n          id\n        }\n        developer {\n          name\n          email\n          address\n          website\n          countryName\n          id\n        }\n        developerEmail\n        id\n      }\n      androidSdks(first: 100) {\n        edges {\n          node {\n            id\n            name\n            slug\n          }\n        }\n      }\n    }\n    ... on IosApp {\n      appstoreData {\n        packageName\n        title\n        installs\n        score\n        description\n        released\n        updated\n        scoreCount\n        screenshots {\n          avif: image(format: AVIF, width: 333, height: 592) {\n            url\n          }\n          webp: image(format: WEBP, width: 333, height: 592) {\n            url\n          }\n        }\n        category {\n          name\n          id\n        }\n        developer {\n          name\n          url\n          website\n          playstoreDeveloper {\n            countryName\n            address\n            email\n            website\n            id\n          }\n          id\n        }\n        id\n      }\n      iosSdks(first: 100) {\n        edges {\n          node {\n            id\n            name\n            slug\n          }\n        }\n      }\n    }\n    id\n  }\n}\n"
  }
};
})();

(node as any).hash = "31992823b93b3af420559bc3d40786f0";

export default node;
