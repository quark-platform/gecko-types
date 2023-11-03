declare module "resource://app/modules/BrowserWindowTracker.sys.mjs" {
    var BrowserWindowTracker: {
        pendingWindows;
        getTopWindow(options?);
        getPendingWindow(options?);
        registerOpeningWindow(window?, isPrivate?);
        openWindow();
        promiseOpenWindow(options?);
        get windowCount(): any;
        get orderedWindows(): any;
        getAllVisibleTabs();
        track(window?);
        getBrowserById(browserId?);
        untrackForTestsOnly(window?);
    };
}