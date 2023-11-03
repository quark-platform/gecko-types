declare module "resource://gre/modules/ContentPrefUtils.sys.mjs" {
    function ContentPref(domain?, name?, value?);
    function cbHandleResult(callback?, pref?);
    function cbHandleCompletion(callback?, reason?);
    function cbHandleError(callback?, nsresult?);
    function safeCallback(callbackObj?, methodName?, args?);
    var _methodsCallableFromChild;
}