declare module "resource://gre/modules/PrincipalsCollector.sys.mjs" {
    export class PrincipalsCollector {
        constructor();
        isSupportedPrincipal(principal?);
        getAllPrincipals();
        _getAllPrincipalsInternal();
    }
}