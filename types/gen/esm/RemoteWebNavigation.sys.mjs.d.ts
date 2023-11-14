declare module "resource://gre/modules/RemoteWebNavigation.sys.mjs" {
    export class RemoteWebNavigation {
        constructor(aBrowser);
        swapBrowser(aBrowser?);
        maybeCancelContentJSExecution(aNavigationType?);
        get canGoBack();
        get canGoForward();
        goBack();
        goForward();
        gotoIndex(aIndex?);
        _speculativeConnect(uri?, loadURIOptions?);
        loadURI(uri?, loadURIOptions?);
        fixupAndLoadURIString(uriString?, loadURIOptions?);
        reload(aReloadFlags?);
        stop(aStopFlags?);
        get document();
        get currentURI();
        set currentURI(aURI);
        get sessionHistory();
        set sessionHistory(aValue);
        _sendMessage(aMessage?, aData?);
    }
}