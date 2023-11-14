declare module "resource://gre/modules/ContentDispatchChooser.sys.mjs" {
    export class nsContentDispatchChooser {
        handleURI(aHandler?, aURI?, aPrincipal?, aBrowsingContext?);
        _getHandlerName(aHandler?);
        _prompt(aHandler?, aPrincipal?, aHasPermission?, aBrowsingContext?, aURI?);
        _hasProtocolHandlerPermission(scheme?, aPrincipal?);
        _getSkipProtoDialogPermissionKey(aProtocolScheme?);
        _openDialog(aDialogURL?, aDialogArgs?, aBrowsingContext?);
        _updatePermission(aPrincipal?, aScheme?, aAllow?);
        _isSupportedPrincipal(aPrincipal?);
    }
}