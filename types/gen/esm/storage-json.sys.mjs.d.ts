declare module "resource://gre/modules/storage-json.sys.mjs" {
    export class LoginManagerStorage_json {
        constructor();
        get _crypto();
        get _decryptedPotentiallyVulnerablePasswords();
        initialize();
        terminate();
        getSyncID();
        setSyncID(syncID?);
        getLastSync();
        setLastSync(timestamp?);
        resetSyncCounter(guid?, value?);
        loginIsDeleted(guid?);
        addLoginsAsync(logins?);
        removeLogin(login?, fromSync?);
        modifyLogin(oldLogin?, newLoginData?, fromSync?);
        recordPasswordUse(login?);
        recordBreachAlertDismissal(loginGUID?);
        getBreachAlertDismissalsByLoginGUID();
        getAllLogins(includeDeleted?);
        searchLoginsAsync(matchData?, includeDeleted?);
        searchLogins(matchData?, includeDeleted?);
        _searchLogins(matchData?);
        removeAllLogins();
        removeAllUserFacingLogins(fullyRemove?);
        findLogins(origin?, formActionOrigin?, httpRealm?);
        countLogins(origin?, formActionOrigin?, httpRealm?);
        addPotentiallyVulnerablePassword(login?);
        isPotentiallyVulnerablePassword(login?);
        clearAllPotentiallyVulnerablePasswords();
        get uiBusy();
        get isLoggedIn();
        _getIdForLogin(login?);
        _isGuidUnique(guid?);
        _encryptLogin(login?);
        _decryptLogins(logins?);
    }
}