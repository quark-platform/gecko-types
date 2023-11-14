declare module "resource://gre/modules/ExtensionUtils.sys.mjs" {
    export var ExtensionUtils: {
        flushJarCache;
        getInnerWindowID;
        getMessageManager;
        getUniqueId;
        filterStack;
        makeDataURI;
        parseMatchPatterns;
        promiseDocumentIdle;
        promiseDocumentLoaded;
        promiseDocumentReady;
        promiseEvent;
        promiseObserved;
        promiseTimeout;
        DefaultMap;
        DefaultWeakMap;
        ExtensionError;
        LimitedSet;
        WorkerExtensionError;
    };
}