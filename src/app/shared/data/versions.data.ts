import {IVersion} from "../models";

/**
 * An enum that contains all documentation versions.
 */
enum VERSIONS {
    "1.0.0" = "v1.0.0"
}

/**
 * The base route for the documentation version modules.
 */
const baseDocsRoute = "/docs";

/**
 * Resolves the given post route to a full route relative to its version.
 * @param version The documentation version for which the post belongs.
 * @param postRoute The post route to be resolved to a full route relative to its version.
 */
function resolveRoute(version: VERSIONS, postRoute: string): string {
    return `${baseDocsRoute}/${version}/${postRoute}`;
}

/**
 * An array of all documentation versions.
 */
export const Versions: IVersion[] = [
    {
        id: "1.0.0",
        version: "v1.0.0",
        groups: [
            {
                title: "Introduction",
                posts: [
                    {
                        id: "getting-started",
                        title: "Getting Started",
                        route: resolveRoute(VERSIONS["1.0.0"], "getting-started"),
                        sections: [
                            {
                                id: "installation",
                                title: "Installation"
                            },
                            {
                                id: "basic-guid",
                                title: "Basic guid"
                            }
                        ]
                    }
                ]
            },
            {
                title: "Name-Space",
                posts: [
                    {
                        id: "validator-class",
                        title: "Validator Class",
                        route: resolveRoute(VERSIONS["1.0.0"], "validator-class"),
                        sections: [
                            {
                                id: "members",
                                title: "Members"
                            },
                            {
                                id: "create",
                                title: "Create(model, \"propertyName\")",
                                isCode: true
                            }
                        ]
                    },
                    {
                        id: "validation-error-class",
                        title: "ValidatorError Class",
                        route: resolveRoute(VERSIONS["1.0.0"], "validation-error-class"),
                        sections: [
                            {
                                id: "members",
                                title: "Members"
                            },
                            {
                                id: "property-name",
                                title: "PropertyName",
                                isCode: true
                            },
                            {
                                id: "error-messages",
                                title: "ErrorMessages",
                                isCode: true
                            }
                        ]
                    },
                    {
                        id: "validation-result-class",
                        title: "ValidatorResult Class",
                        route: resolveRoute(VERSIONS["1.0.0"], "validation-result-class"),
                        sections: [
                            {
                                id: "members",
                                title: "Members"
                            },
                            {
                                id: "validate",
                                title: "Validate(validators)",
                                isCode: true
                            },
                            {
                                id: "result",
                                title: "Result(validators)",
                                isCode: true
                            }
                        ]
                    }
                ]
            },
            {
                title: "Validation",
                posts: [
                    {
                        id: "black-list-func",
                        title: ".BlackList()",
                        isCode: true,
                        route: resolveRoute(VERSIONS["1.0.0"], "black-list-func"),
                        sections: [
                            {
                                id: "definition",
                                title: "Definition"
                            },
                            {
                                id: "examples",
                                title: "Examples"
                            },
                            {
                                id: "example1",
                                title: "Example 1"
                            },
                            {
                                id: "example2",
                                title: "Example 2"
                            }
                        ]
                    },
                    {
                        id: "contains-func",
                        title: ".Contains()",
                        isCode: true,
                        route: resolveRoute(VERSIONS["1.0.0"], "contains-func"),
                        sections: [
                            {
                                id: "definitions",
                                title: "Definitions"
                            },
                            {
                                id: "examples",
                                title: "Examples"
                            },
                            {
                                id: "example1",
                                title: "Example 1"
                            },
                            {
                                id: "example2",
                                title: "Example 2"
                            }
                        ]
                    },
                    {
                        id: "custom-validator-func",
                        title: ".CustomValidator()",
                        isCode: true,
                        route: resolveRoute(VERSIONS["1.0.0"], "custom-validator-func"),
                        sections: [
                            {
                                id: "definitions",
                                title: "Definitions"
                            },
                            {
                                id: "examples",
                                title: "Examples"
                            },
                            {
                                id: "example1",
                                title: "Example 1"
                            },
                            {
                                id: "example2",
                                title: "Example 2"
                            }
                        ]
                    },
                    {
                        id: "ends-with-func",
                        title: ".EndsWith()",
                        isCode: true,
                        route: resolveRoute(VERSIONS["1.0.0"], "ends-with-func"),
                        sections: [
                            {
                                id: "definition",
                                title: "Definition"
                            },
                            {
                                id: "examples",
                                title: "Examples"
                            },
                            {
                                id: "example1",
                                title: "Example 1"
                            },
                            {
                                id: "example2",
                                title: "Example 2"
                            }
                        ]
                    },
                    {
                        id: "is-alpha-func",
                        title: ".IsAlpha()",
                        isCode: true,
                        route: resolveRoute(VERSIONS["1.0.0"], "is-alpha-func"),
                        sections: [
                            {
                                id: "definition",
                                title: "Definition"
                            },
                            {
                                id: "examples",
                                title: "Examples"
                            },
                            {
                                id: "example1",
                                title: "Example 1"
                            },
                            {
                                id: "example2",
                                title: "Example 2"
                            }
                        ]
                    },
                ]
            }
        ]
    }
];
