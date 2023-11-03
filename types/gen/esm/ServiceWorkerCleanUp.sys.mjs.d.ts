declare module "resource://gre/modules/ServiceWorkerCleanUp.sys.mjs" {
    var ServiceWorkerCleanUp: {
        removeFromHost(aHost?);
        removeFromBaseDomain(aBaseDomain?);
        removeFromPrincipal(aPrincipal?);
        removeFromOriginAttributes(aOriginAttributesString?);
        removeAll();
    };
}