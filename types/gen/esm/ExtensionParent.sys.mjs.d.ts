declare module "resource://gre/modules/ExtensionParent.sys.mjs" {
    export var ExtensionParent: {
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