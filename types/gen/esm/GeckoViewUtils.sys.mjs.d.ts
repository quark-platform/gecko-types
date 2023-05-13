declare module "resource://gre/modules/GeckoViewUtils.sys.mjs" {
    var GeckoViewUtils: {
        addLazyGetter(scope, name);
        _addLazyListeners(events, handler, scope, name, addFn, handleFn);
        addLazyEventListener(target, events);
        addLazyPrefObserver(aPrefs);
        getRootDocShell(aWin);
        getChromeWindow(aWin);
        getContentFrameMessageManager(aWin);
        getDispatcherForWindow(aWin);
        waitForPanZoomState(aWindow);
        initLogging(aTag, aScope);
        get rootLogger(): any;
        _log(aLogger, aLevel, aStrings, aExprs);
        isSupportedPermissionsPrincipal(principal);
        isSupportedPermissionsScheme(scheme);
    };
}