declare module "resource://gre/modules/services-common/rest.sys.mjs" {
    function RESTRequest(uri);
    function RESTResponse();
    function TokenAuthenticatedRESTRequest(uri, authToken, extra);
}