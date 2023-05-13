declare module "resource://app/modules/MerinoClient.sys.mjs" {
    export class MerinoClient {
        get SEARCH_PARAMS();
        constructor();
        get name();
        get sessionTimeoutMs();
        set sessionTimeoutMs(value);
        get sessionID();
        get sequenceNumber();
        get lastFetchStatus();
        fetch();
        resetSession();
        cancelTimeoutTimer();
        waitForNextResponse();
        waitForNextSessionReset();
        get _test_sessionTimer();
        get _test_timeoutTimer();
        get _test_fetchController();
        get _test_latencyStopwatchInstance();
    }
}