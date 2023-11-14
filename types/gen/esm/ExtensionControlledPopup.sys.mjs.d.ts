declare module "resource://app/modules/ExtensionControlledPopup.sys.mjs" {
    export class ExtensionControlledPopup {
        constructor(opts);
        get topWindow();
        userHasConfirmed(id?);
        setConfirmation(id?);
        clearConfirmation(id?);
        observe(subject?, topic?, data?);
        removeObserver();
        addObserver(extensionId?);
        open(targetWindow?, extensionId?);
        getAddonDetails(doc?, addon?);
        populateDescription(doc?, addon?);
        _ensureWindowReady(win?);
        _getAndMaybeCreatePanel(doc?);
    }
}