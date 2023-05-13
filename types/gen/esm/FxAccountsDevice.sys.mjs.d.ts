declare module "resource://gre/modules/FxAccountsDevice.sys.mjs" {
    export class FxAccountsDevice {
        constructor(fxai);
        getLocalId();
        getDefaultLocalName();
        getLocalName();
        setLocalName();
        getLocalType();
        get recentDeviceList();
        refreshDeviceList();
        _refreshRemoteDevice();
        updateDeviceRegistration();
        updateDeviceRegistrationIfNecessary();
        reset();
        _withCurrentAccountState();
        _withVerifiedAccountState();
        _checkDeviceUpdateNeeded();
        _checkRemoteCommandsUpdateNeeded();
        _updateDeviceRegistrationIfNecessary();
        _registerOrUpdateDevice();
        _handleDeviceError();
        _recoverFromUnknownDevice();
        _recoverFromDeviceSessionConflict();
        _logErrorAndResetDeviceRegistrationVersion();
        observe();
    }
}