declare module "resource://gre/modules/FxAccounts.sys.mjs" {
    function AccountState(storageManager);
    export class FxAccounts {
        constructor();
        get commands();
        get config();
        get device();
        get keys();
        get telemetry();
        _withCurrentAccountState();
        _withVerifiedAccountState();
        _withSessionToken();
        listAttachedOAuthClients();
        getOAuthToken();
        removeCachedOAuthToken();
        getSignedInUser();
        checkAccountStatus();
        hasLocalSession();
        canConnectAccount();
        notifyDevices();
        resendVerificationEmail();
        signOut();
        updateDeviceRegistration();
        whenVerified();
        flushLogFile();
    }
    function getFxAccountsSingleton();
}