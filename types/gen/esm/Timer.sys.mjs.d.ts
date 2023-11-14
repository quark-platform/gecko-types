declare module "resource://gre/modules/Timer.sys.mjs" {
    export function setTimeout(aCallback?, aMilliseconds?);
    export function setTimeoutWithTarget(aCallback?, aMilliseconds?, aTarget?);
    export function setInterval(aCallback?, aMilliseconds?);
    export function setIntervalWithTarget(aCallback?, aMilliseconds?, aTarget?);
    export var clearInterval;
    export var clearTimeout;
    export function requestIdleCallback(aCallback?, aOptions?);
    export function cancelIdleCallback(aId?);
}