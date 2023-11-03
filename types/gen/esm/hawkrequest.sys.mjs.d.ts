declare module "resource://gre/modules/services-common/hawkrequest.sys.mjs" {
    var HAWKAuthenticatedRESTRequest;
    function deriveHawkCredentials(tokenHex?, context?, size?);
}