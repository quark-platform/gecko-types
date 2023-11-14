declare module "resource://gre/modules/ServiceRequest.sys.mjs" {
    export class ServiceRequest extends XMLHttpRequest {
        constructor(options);
        open();
        get bypassProxy();
        get isProxied();
        get bypassProxyEnabled();
        logProxySource();
        get isOffline();
    }
}