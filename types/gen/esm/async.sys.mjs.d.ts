declare module "resource://gre/modules/services-common/async.sys.mjs" {
    var Async: {
        chain;
        checkAppReady;
        isAppReady();
        isShutdownException(exception);
        promiseYield();
        yieldState(yieldEvery);
        yieldingForEach(iterable, fn, yieldEvery);
        asyncQueueCaller(log);
        asyncObserver(log, obj);
        watchdog();
    };
}