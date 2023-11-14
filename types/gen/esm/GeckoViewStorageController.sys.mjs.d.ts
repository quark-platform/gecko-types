declare module "resource://gre/modules/GeckoViewStorageController.sys.mjs" {
    export var GeckoViewStorageController: {
        onEvent(aEvent?, aData?, aCallback?);
        clearData(aFlags?, aCallback?);
        clearHostData(aHost?, aFlags?, aCallback?);
        clearBaseDomainData(aBaseDomain?, aFlags?, aCallback?);
        clearSessionContextData(aContextId?);
    };
}