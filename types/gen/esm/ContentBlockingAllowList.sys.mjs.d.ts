declare module "resource://gre/modules/ContentBlockingAllowList.sys.mjs" {
    export var ContentBlockingAllowList: {
        _observingLastPBContext;
        _maybeSetupLastPBContextObserver();
        _basePrincipalForAntiTrackingCommon(browser?);
        _permissionTypeFor(browser?);
        _expiryFor(browser?);
        canHandle(browser?);
        add(browser?);
        remove(browser?);
        includes(browser?);
    };
}