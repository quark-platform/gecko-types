declare module "resource://gre/modules/services-common/rest.sys.mjs" {
    export function RESTRequest(uri?);
    export function RESTResponse(request?);
    export function TokenAuthenticatedRESTRequest(uri?, authToken?, extra?);
}