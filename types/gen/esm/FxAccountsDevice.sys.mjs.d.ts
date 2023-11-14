declare module "resource://gre/modules/FxAccountsDevice.sys.mjs" {
    export class FxAccountsDevice {
        constructor(fxai);
        getLocalId();
        getDefaultLocalName();
        getLocalName();
        setLocalName(newName?);
        getLocalType();
        get recentDeviceList();
        refreshDeviceList(param0?);
        _refreshRemoteDevice(currentState?, accountData?, remoteDevices?);
        updateDeviceRegistration();
        updateDeviceRegistrationIfNecessary();
        reset();
        _withCurrentAccountState(func?);
        _withVerifiedAccountState(func?);
        _checkDeviceUpdateNeeded(device?);
        _checkRemoteCommandsUpdateNeeded(remoteAvailableCommands?);
        _updateDeviceRegistrationIfNecessary(currentState?);
        _registerOrUpdateDevice(currentState?, signedInUser?);
        _handleDeviceError(currentState?, error?, sessionToken?);
        _recoverFromUnknownDevice(currentState?);
        _recoverFromDeviceSessionConflict(currentState?, error?, sessionToken?);
        _logErrorAndResetDeviceRegistrationVersion(currentState?, error?);
        observe(subject?, topic?, data?);
    }
}