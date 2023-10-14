declare module "resource://gre/modules/LoadURIDelegate.sys.mjs" {
    var LoadURIDelegate: {
        load(aWindow, aEventDispatcher, aUri, aWhere, aFlags, aTriggeringPrincipal);
        handleLoadError(aWindow, aEventDispatcher, aUri, aError, aErrorModule);
        isSafeBrowsingError(aError);
    };
}