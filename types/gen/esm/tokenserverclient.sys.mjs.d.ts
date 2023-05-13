declare module "resource://gre/modules/services-common/tokenserverclient.sys.mjs" {
    function TokenServerClientError(message);
    function TokenServerClientNetworkError(error);
    function TokenServerClientServerError(message);
    function TokenServerClient();
}