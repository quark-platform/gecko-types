declare module "resource://gre/modules/services-common/async.sys.mjs" {
    var Async: {
        chain;
        checkAppReady;
        isAppReady();
        isShutdownException(exception);
        promiseYield();
        yieldState();
        yieldingForEach(iterable, fn);
        asyncQueueCaller(log);
        asyncObserver(log, obj);
        watchdog();
    };
}