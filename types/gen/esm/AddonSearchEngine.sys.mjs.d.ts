declare module "resource://gre/modules/AddonSearchEngine.sys.mjs" {
    export class AddonSearchEngine {
        constructor();
        _initWithJSON();
        init();
        update();
        updateIfNoNameChange();
        get isAppProvided();
        get inMemory();
        get isGeneralPurposeEngine();
        toJSON();
        checkAndReportIfSettingsValid();
        getWebExtensionPolicy();
    }
}