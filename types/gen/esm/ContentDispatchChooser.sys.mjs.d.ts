declare module "resource://gre/modules/ContentDispatchChooser.sys.mjs" {
    export class nsContentDispatchChooser {
        handleURI();
        _getHandlerName();
        _prompt();
        _hasProtocolHandlerPermission();
        _getSkipProtoDialogPermissionKey();
        _openDialog();
        _updatePermission();
        _isSupportedPrincipal();
    }
}