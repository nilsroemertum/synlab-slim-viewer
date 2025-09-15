/**
 * Join a URI with a path to form a full URL.
 *
 * @param path - Path component
 * @param uri - Base URI to which the path component should be added
 */
export declare const joinUrl: (path: string, uri: string) => string;
/**
 * Check whether a URL contains an OAuth 2.0 authorization code.
 *
 * @param location - URL components (JavaScript location object)
 * @returns Whether the URL contains a code
 */
export declare const isAuthorizationCodeInUrl: (location: {
    search: string;
    hash: string;
}) => boolean;
//# sourceMappingURL=url.d.ts.map