declare module "resource://gre/modules/ServiceWorkerCleanUp.sys.mjs" {
    export var ServiceWorkerCleanUp: {
        removeFromHost(aHost?);
        removeFromBaseDomain(aBaseDomain?);
        removeFromPrincipal(aPrincipal?);
        removeFromOriginAttributes(aOriginAttributesString?);
        removeAll();
    };
}