declare module "resource://gre/modules/ProxyChannelFilter.sys.mjs" {
    export class ProxyChannelFilter {
        constructor(context, extension, listener, filter, extraInfoSpec);
        getRequestData();
        applyFilter();
        destroy();
    }
}