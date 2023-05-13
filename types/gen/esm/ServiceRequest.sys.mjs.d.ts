declare module "resource://gre/modules/ServiceRequest.sys.mjs" {
    export class ServiceRequest {
        constructor(options);
        open();
        get bypassProxy();
        get isProxied();
        get bypassProxyEnabled();
        logProxySource();
        get isOffline();
    }
}