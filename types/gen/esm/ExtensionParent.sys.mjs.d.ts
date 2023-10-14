declare module "resource://gre/modules/ExtensionParent.sys.mjs" {
    var ExtensionParent: {
        GlobalManager;
        HiddenExtensionPage;
        IconDetails;
        ParentAPIManager;
        StartupCache;
        WebExtensionPolicy;
        apiManager;
        promiseBackgroundViewLoaded;
        watchExtensionProxyContextLoad;
        watchExtensionWorkerContextLoaded;
        DebugUtils;
    };
}