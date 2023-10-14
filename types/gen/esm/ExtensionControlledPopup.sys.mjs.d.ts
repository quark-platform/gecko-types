declare module "resource://app/modules/ExtensionControlledPopup.sys.mjs" {
    export class ExtensionControlledPopup {
        constructor(opts);
        get topWindow();
        userHasConfirmed();
        setConfirmation();
        clearConfirmation();
        observe();
        removeObserver();
        addObserver();
        open();
        getAddonDetails();
        populateDescription();
        _ensureWindowReady();
        _getAndMaybeCreatePanel();
    }
}