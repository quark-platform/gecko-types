declare module "resource://gre/modules/PrincipalsCollector.sys.mjs" {
    export class PrincipalsCollector {
        constructor();
        isSupportedPrincipal();
        getAllPrincipals();
        _getAllPrincipalsInternal();
    }
}