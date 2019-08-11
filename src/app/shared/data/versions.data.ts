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
                                id: "section1",
                                title: "Section 1"
                            }
                        ]
                    }
                ]
            }
        ]
    }
];
