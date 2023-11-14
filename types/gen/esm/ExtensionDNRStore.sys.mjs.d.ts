declare module "resource://gre/modules/ExtensionDNRStore.sys.mjs" {
    export var ExtensionDNRStore: {
        clearOnUninstall(extensionUUID?);
        initExtension(extension?);
        updateDynamicRules(extension?, updateRuleOptions?);
        updateEnabledStaticRulesets(extension?, updateRulesetOptions?);
        _getLastUpdateTag(extensionUUID?);
        _getStoreForTesting();
        _getStoreDataClassForTesting();
        _recreateStoreForTesting();
        _storeLastUpdateTag(extensionUUID?, lastUpdateTag?);
    };
}