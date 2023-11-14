declare module "resource://gre/modules/AddonSearchEngine.sys.mjs" {
    import type { SearchEngine } from "resource://gre/modules/SearchEngine.sys.mjs";
    export class AddonSearchEngine extends SearchEngine {
        constructor(param0);
        _initWithJSON(json?);
        init(param0?);
        update(param0?);
        updateIfNoNameChange(param0?);
        get isAppProvided();
        get inMemory();
        get isGeneralPurposeEngine();
        toJSON();
        checkAndReportIfSettingsValid();
        getWebExtensionPolicy(id?);
        _extensionID;
        _locale;
    }
}