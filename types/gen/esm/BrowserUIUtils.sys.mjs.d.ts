declare module "resource://app/modules/BrowserUIUtils.sys.mjs" {
    var BrowserUIUtils: {
        checkEmptyPageOrigin(browser?, uri?);
        getLocalizedFragment(doc?, msg?);
        removeSingleTrailingSlashFromURL(aURL?);
        get trimURLProtocol(): any;
        trimURL(aURL?);
    };
}