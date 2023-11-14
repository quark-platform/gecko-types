declare module "resource://gre/modules/SessionStoreFunctions.sys.mjs" {
    export function UpdateSessionStore(aBrowser?, aBrowsingContext?, aPermanentKey?, aEpoch?, aCollectSHistory?, aData?);
    export function UpdateSessionStoreForStorage(aBrowser?, aBrowsingContext?, aPermanentKey?, aEpoch?, aData?);
}