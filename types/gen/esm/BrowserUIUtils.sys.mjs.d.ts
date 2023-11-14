declare module "resource://app/modules/BrowserUIUtils.sys.mjs" {
    export var BrowserUIUtils: {
        checkEmptyPageOrigin(browser?, uri?);
        getLocalizedFragment(doc?, msg?);
        removeSingleTrailingSlashFromURL(aURL?);
        get trimURLProtocol(): any;
        trimURL(aURL?);
    };
}