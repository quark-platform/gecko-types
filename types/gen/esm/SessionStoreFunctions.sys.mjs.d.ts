declare module "resource://gre/modules/SessionStoreFunctions.sys.mjs" {
    function UpdateSessionStore(aBrowser, aBrowsingContext, aPermanentKey, aEpoch, aCollectSHistory, aData);
    function UpdateSessionStoreForStorage(aBrowser, aBrowsingContext, aPermanentKey, aEpoch, aData);
}