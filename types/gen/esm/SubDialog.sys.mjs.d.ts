declare module "resource://gre/modules/SubDialog.sys.mjs" {
    function SubDialog(param0?);
    export class SubDialogManager {
        constructor();
        get _topDialog();
        open(aURL?);
        close();
        hideDialog(aBrowser?);
        abortDialogs();
        get hasDialogs();
        get dialogs();
        focusTopDialog();
        handleEvent(aEvent?);
        _onDialogOpen(dialog?);
        _onDialogClose(dialog?);
        _ensureStackEventListeners();
        _removeStackEventListeners();
    }
}