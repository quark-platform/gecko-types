declare module "resource://gre/modules/ServiceRequest.sys.mjs" {
    export class ServiceRequest extends XMLHttpRequest {
        constructor(options);
        open(method?, url?, options?);
        get bypassProxy();
        get isProxied();
        get bypassProxyEnabled();
        logProxySource(channel?, service?);
        get isOffline();
    }
}