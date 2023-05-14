declare module "resource://gre/modules/ExtensionDNRStore.sys.mjs" {
    var ExtensionDNRStore: {
        clearOnUninstall(extensionUUID);
        initExtension(extension);
        updateDynamicRules(extension, updateRuleOptions);
        updateEnabledStaticRulesets(extension, updateRulesetOptions);
        _getLastUpdateTag(extensionUUID);
        _getStoreForTesting();
        _getStoreDataClassForTesting();
        _recreateStoreForTesting();
        _storeLastUpdateTag(extensionUUID, lastUpdateTag);
    };
}