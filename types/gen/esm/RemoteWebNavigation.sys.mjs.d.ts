declare module "resource://gre/modules/RemoteWebNavigation.sys.mjs" {
    export class RemoteWebNavigation {
        constructor(aBrowser);
        swapBrowser();
        maybeCancelContentJSExecution();
        get canGoBack();
        get canGoForward();
        goBack();
        goForward();
        gotoIndex();
        _speculativeConnect();
        loadURI();
        fixupAndLoadURIString();
        reload();
        stop();
        get document();
        get currentURI();
        set currentURI(aURI);
        get sessionHistory();
        set sessionHistory(aValue);
        _sendMessage();
    }
}