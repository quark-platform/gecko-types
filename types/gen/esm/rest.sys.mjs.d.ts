declare module "resource://gre/modules/services-common/rest.sys.mjs" {
    function RESTRequest(uri);
    function RESTResponse(request);
    function TokenAuthenticatedRESTRequest(uri, authToken, extra);
}