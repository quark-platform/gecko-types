declare module "resource://gre/modules/FxAccounts.sys.mjs" {
    export function AccountState(storageManager?);
    export class FxAccounts {
        constructor(param0);
        get commands();
        get config();
        get device();
        get keys();
        get telemetry();
        _withCurrentAccountState(func?);
        _withVerifiedAccountState(func?);
        _withSessionToken(func?, param1?);
        listAttachedOAuthClients();
        getOAuthToken(param0?);
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
    export function getFxAccountsSingleton();
}