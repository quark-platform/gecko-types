declare module "resource://app/modules/BrowserGlue.sys.mjs" {
    var BrowserInitState: {};
    function BrowserGlue();
    function ContentPermissionPrompt();
    var DefaultBrowserCheck: {
        prompt(win);
        willCheckDefaultBrowser(isStartupCheck);
    };
    var AboutHomeStartupCache: {
        ABOUT_HOME_URI_STRING;
        SCRIPT_EXTENSION;
        ENABLED_PREF;
        PRELOADED_NEWTAB_PREF;
        LOG_LEVEL_PREF;
        CACHE_VERSION_META_KEY;
        LOG_NAME;
        CACHE_REQUEST_MESSAGE;
        CACHE_RESPONSE_MESSAGE;
        CACHE_USAGE_RESULT_MESSAGE;
        SEND_STREAMS_MESSAGE;
        CACHE_DEBOUNCE_RATE_MS: number;
        SHUTDOWN_CACHE_WRITE_TIMEOUT_MS: number;
        CACHE_RESULT_SCALARS: {
            UNSET: number;
            DOES_NOT_EXIST: number;
            CORRUPT_PAGE: number;
            CORRUPT_SCRIPT: number;
            INVALIDATED: number;
            LATE: number;
            VALID_AND_USED: number;
            DISABLED: number;
            NOT_LOADING_ABOUTHOME: number;
            PRELOADING_DISABLED: number;
        };
        _cacheDeferredResultScalar;
        _cacheEntry;
        _pagePipe;
        _scriptPipe;
        _cacheDeferred;
        _enabled;
        _initted;
        _hasWrittenThisSession;
        _finalized;
        _firstPrivilegedProcessCreated;
        init();
        get initted(): any;
        uninit();
        _aboutHomeURI;
        get aboutHomeURI(): any;
        _cacheProgress;
        onShutdown(withTimeout);
        cacheNow();
        requestCache();
        makePipe();
        get pagePipe(): any;
        get scriptPipe(): any;
        connectToPipes();
        populateCache(pageInputStream, scriptInputStream);
        ensureCacheEntry();
        clearCache();
        onContentProcessCreated(childID, procManager, processParent);
        onContentProcessShutdown(childID);
        onPreloadedNewTabMessage();
        setDeferredResult(result);
        recordResult(result);
        onUsageResult(success);
        QueryInterface;
        receiveMessage(message);
        observe(aSubject, aTopic, aData);
        onCacheEntryCheck(aEntry);
        onCacheEntryAvailable(aEntry, aNew, aResult);
    };
}