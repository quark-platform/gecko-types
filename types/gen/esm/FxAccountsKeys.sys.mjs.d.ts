declare module "resource://gre/modules/FxAccountsKeys.sys.mjs" {
    export class FxAccountsKeys {
        constructor(fxAccountsInternal);
        canGetKeyForScope(scope?);
        getKeyForScope(scope?);
        kidAsHex(jwk?);
        _loadOrFetchKeys();
        _migrateOrFetchKeys(currentState?, userData?);
        _removeDeprecatedKeys(currentState?, userData?);
        _fetchAndUnwrapAndDeriveKeys(currentState?, sessionToken?, keyFetchToken?);
        _fetchKeys(keyFetchToken?);
        _fetchScopedKeysMetadata(sessionToken?);
        _deriveKeys(uid?, kBbytes?, scopedKeysMetadata?);
        _deriveScopedKeys(uid?, kBbytes?, scopedKeysMetadata?);
        _deriveScopedKey(uid?, kBbytes?, scope?, scopedKeyMetadata?);
        _deriveLegacyScopedKey(uid?, kBbytes?, scope?, scopedKeyMetadata?);
        _formatLegacyScopedKey(kid?, key?, scope?);
        _deriveSyncKey(kBbytes?);
        _deriveXClientState(kBbytes?);
        _sha256(bytes?);
    }
}