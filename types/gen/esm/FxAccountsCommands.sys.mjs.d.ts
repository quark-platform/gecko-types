declare module "resource://gre/modules/FxAccountsCommands.sys.mjs" {
    export class FxAccountsCommands {
        constructor(fxAccountsInternal);
        availableCommands();
        invoke(command?, device?, payload?);
        pollDeviceCommands(param0?);
        _fetchDeviceCommands(index?, param1?);
        _getReason(notifiedIndex?, messageIndex?);
        _handleCommands(messages?, notifiedIndex?);
        _notifyFxATabsReceived(tabsReceived?);
    }
    export class SendTab {
        constructor(commands, fxAccountsInternal);
        send(to?, tab?);
        isDeviceCompatible(device?);
        handle(senderID?, param1?, reason?);
        _encrypt(bytes?, device?);
        _getPersistedSendTabKeys();
        _decrypt(ciphertext?);
        _generateAndPersistSendTabKeys();
        _getPersistedEncryptedSendTabKey();
        _generateAndPersistEncryptedSendTabKey();
        getEncryptedSendTabKeys();
    }
}