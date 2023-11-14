declare module "resource://gre/modules/services-common/hawkrequest.sys.mjs" {
    export var HAWKAuthenticatedRESTRequest;
    export function deriveHawkCredentials(tokenHex?, context?, size?);
}