declare module "resource://gre/modules/ContentPrefUtils.sys.mjs" {
    export function ContentPref(domain?, name?, value?);
    export function cbHandleResult(callback?, pref?);
    export function cbHandleCompletion(callback?, reason?);
    export function cbHandleError(callback?, nsresult?);
    export function safeCallback(callbackObj?, methodName?, args?);
    export var _methodsCallableFromChild;
}