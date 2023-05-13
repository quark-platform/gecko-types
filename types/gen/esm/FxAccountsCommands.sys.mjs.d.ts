declare module "resource://gre/modules/FxAccountsCommands.sys.mjs" {
    export class FxAccountsCommands {
        constructor(fxAccountsInternal);
        availableCommands();
        invoke();
        pollDeviceCommands();
        _fetchDeviceCommands();
        _getReason();
        _handleCommands();
        _notifyFxATabsReceived();
    }
    export class SendTab {
        constructor(commands, fxAccountsInternal);
        send();
        isDeviceCompatible();
        handle();
        _encrypt();
        _getPersistedSendTabKeys();
        _decrypt();
        _generateAndPersistSendTabKeys();
        _getPersistedEncryptedSendTabKey();
        _generateAndPersistEncryptedSendTabKey();
        getEncryptedSendTabKeys();
    }
}