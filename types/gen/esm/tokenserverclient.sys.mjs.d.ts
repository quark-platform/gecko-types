declare module "resource://gre/modules/services-common/tokenserverclient.sys.mjs" {
    export function TokenServerClientError(message?);
    export function TokenServerClientNetworkError(error?);
    export function TokenServerClientServerError(message?, cause?);
    export function TokenServerClient();
}