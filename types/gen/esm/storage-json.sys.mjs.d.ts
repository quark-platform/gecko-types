declare module "resource://gre/modules/storage-json.sys.mjs" {
    export class LoginManagerStorage_json {
        constructor();
        get _crypto();
        get _decryptedPotentiallyVulnerablePasswords();
        initialize();
        terminate();
        getSyncID();
        setSyncID();
        getLastSync();
        setLastSync();
        resetSyncCounter();
        loginIsDeleted();
        addLoginsAsync();
        removeLogin();
        modifyLogin();
        recordPasswordUse();
        recordBreachAlertDismissal();
        getBreachAlertDismissalsByLoginGUID();
        getAllLogins();
        searchLoginsAsync();
        searchLogins();
        _searchLogins();
        removeAllLogins();
        removeAllUserFacingLogins();
        findLogins();
        countLogins();
        addPotentiallyVulnerablePassword();
        isPotentiallyVulnerablePassword();
        clearAllPotentiallyVulnerablePasswords();
        get uiBusy();
        get isLoggedIn();
        _getIdForLogin();
        _isGuidUnique();
        _encryptLogin();
        _decryptLogins();
    }
}