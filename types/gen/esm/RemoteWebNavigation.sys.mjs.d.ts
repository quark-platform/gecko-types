declare module "resource://gre/modules/RemoteWebNavigation.sys.mjs" {
    export class RemoteWebNavigation {
        constructor(aBrowser);
        swapBrowser(aBrowser?);
        maybeCancelContentJSExecution(aNavigationType?, param1?);
        get canGoBack();
        get canGoForward();
        goBack(param0?);
        goForward(param0?);
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