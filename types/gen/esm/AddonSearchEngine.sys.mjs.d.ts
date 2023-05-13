declare module "resource://gre/modules/AddonSearchEngine.sys.mjs" {
    export class AddonSearchEngine {
        constructor();
        init();
        update();
        updateIfNoNameChange();
        get isAppProvided();
        get inMemory();
        toJSON();
        checkAndReportIfSettingsValid();
        getWebExtensionPolicy();
    }
}