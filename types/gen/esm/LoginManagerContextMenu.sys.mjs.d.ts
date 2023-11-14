declare module "resource://gre/modules/LoginManagerContextMenu.sys.mjs" {
    export var LoginManagerContextMenu: {
        addLoginsToMenu(inputElementIdentifier?, browser?, formOrigin?);
        clearLoginsFromMenu(document?);
        useGeneratedPassword(inputElementIdentifier?, documentURI?, browser?);
        _findLogins(formOrigin?);
        _findDuplicates(loginList?);
        _fillTargetField(login?, inputElementIdentifier?, browser?, formOrigin?);
        _getLocalizedString(key?, formatArgs?);
    };
}