declare module "resource://gre/modules/FxAccountsKeys.sys.mjs" {
    export class FxAccountsKeys {
        constructor(fxAccountsInternal);
        canGetKeyForScope();
        getKeyForScope();
        keyAsHex();
        kidAsHex();
        _loadOrFetchKeys();
        _migrateOrFetchKeys();
        _fetchAndUnwrapAndDeriveKeys();
        _fetchKeys();
        _fetchScopedKeysMetadata();
        _deriveKeys();
        _deriveScopedKeys();
        _deriveScopedKeysFromAccountData();
        _deriveScopedKey();
        _deriveLegacyScopedKey();
        _formatLegacyScopedKey();
        _deriveSyncKey();
        _deriveXClientState();
        _deriveWebExtSyncStoreKey();
        _deriveWebExtKbHash();
        _sha256();
    }
}