declare module "resource://gre/modules/FxAccounts.sys.mjs" {
    function AccountState(storageManager?);
    export class FxAccounts {
        constructor();
        get commands();
        get config();
        get device();
        get keys();
        get telemetry();
        _withCurrentAccountState(func?);
        _withVerifiedAccountState(func?);
        _withSessionToken(func?);
        listAttachedOAuthClients();
        getOAuthToken();
        removeCachedOAuthToken(options?);
        getSignedInUser();
        checkAccountStatus();
        hasLocalSession();
        canConnectAccount();
        notifyDevices(deviceIds?, excludedIds?, payload?, TTL?);
        resendVerificationEmail();
        signOut(localOnly?);
        updateDeviceRegistration();
        whenVerified(data?);
        flushLogFile();
    }
    function getFxAccountsSingleton();
}