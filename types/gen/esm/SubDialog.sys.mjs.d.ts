declare module "resource://gre/modules/SubDialog.sys.mjs" {
    function SubDialog(param0);
    export class SubDialogManager {
        constructor();
        get _topDialog();
        open();
        close();
        hideDialog();
        abortDialogs();
        get hasDialogs();
        get dialogs();
        focusTopDialog();
        handleEvent();
        _onDialogOpen();
        _onDialogClose();
        _ensureStackEventListeners();
        _removeStackEventListeners();
    }
}