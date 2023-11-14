declare module "resource://gre/modules/translation/LanguageDetector.sys.mjs" {
    export var workerManager: {
        LARGE_STRING;
        IDLE_TIMEOUT;
        detectionQueue;
        detectLanguage(aParams?);
        _worker;
        _workerReadyPromise;
        get workerReady(): any;
        _idleTimeout;
        flushWorker();
        _flushWorker();
    };
    export var LanguageDetector: {
        detectLanguage(aParams?);
        detectLanguageFromDocument(aDocument?);
    };
}