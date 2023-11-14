declare module "resource://gre/modules/SubDialog.sys.mjs" {
    export function SubDialog(param0?);
    export class SubDialogManager {
        constructor(param0);
        get _topDialog();
        open(aURL?, param1?, param2?);
        close();
        hideDialog(aBrowser?);
        abortDialogs(param0?);
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