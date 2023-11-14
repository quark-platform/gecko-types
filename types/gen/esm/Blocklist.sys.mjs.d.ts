declare module "resource://gre/modules/Blocklist.sys.mjs" {
    export var Blocklist: {
        _init();
        isLoaded;
        shutdown();
        observe(subject?, topic?, prefName?);
        loadBlocklistAsync();
        getAddonBlocklistState(addon?, appVersion?, toolkitVersion?);
        getAddonBlocklistEntry(addon?, appVersion?, toolkitVersion?);
        recordAddonBlockChangeTelemetry(addon?, reason?);
        allowDeprecatedBlocklistV2;
        _chooseExtensionBlocklistImplementationFromPref();
        _blocklistUpdated();
    };
    export var BlocklistPrivate: {
        BlocklistTelemetry;
        ExtensionBlocklistMLBF;
        ExtensionBlocklistRS;
        GfxBlocklistRS;
    };
}