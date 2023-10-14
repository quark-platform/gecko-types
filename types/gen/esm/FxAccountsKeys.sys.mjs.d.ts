declare module "resource://gre/modules/FxAccountsKeys.sys.mjs" {
    export class FxAccountsKeys {
        constructor(fxAccountsInternal);
        canGetKeyForScope();
        getKeyForScope();
        kidAsHex();
        _loadOrFetchKeys();
        _migrateOrFetchKeys();
        _removeDeprecatedKeys();
        _fetchAndUnwrapAndDeriveKeys();
        _fetchKeys();
        _fetchScopedKeysMetadata();
        _deriveKeys();
        _deriveScopedKeys();
        _deriveScopedKey();
        _deriveLegacyScopedKey();
        _formatLegacyScopedKey();
        _deriveSyncKey();
        _deriveXClientState();
        _sha256();
    }
}