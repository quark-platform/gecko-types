declare module "resource://gre/modules/AddonSearchEngine.sys.mjs" {
    import type { SearchEngine } from "resource://gre/modules/SearchEngine.sys.mjs";
    export class AddonSearchEngine extends SearchEngine {
        constructor();
        _initWithJSON(json?);
        init();
        update();
        updateIfNoNameChange();
        get isAppProvided();
        get inMemory();
        get isGeneralPurposeEngine();
        toJSON();
        checkAndReportIfSettingsValid();
        getWebExtensionPolicy(id?);
    }
}