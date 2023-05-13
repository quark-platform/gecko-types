declare module "resource://gre/modules/Timer.sys.mjs" {
    function setTimeout(aCallback, aMilliseconds);
    function setTimeoutWithTarget(aCallback, aMilliseconds, aTarget);
    function setInterval(aCallback, aMilliseconds);
    function setIntervalWithTarget(aCallback, aMilliseconds, aTarget);
    var clearInterval;
    var clearTimeout;
    function requestIdleCallback(aCallback, aOptions);
    function cancelIdleCallback(aId);
}