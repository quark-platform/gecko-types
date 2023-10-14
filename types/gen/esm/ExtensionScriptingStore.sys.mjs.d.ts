declare module "resource://gre/modules/ExtensionScriptingStore.sys.mjs" {
    var makeInternalContentScript;
    var makePublicContentScript;
    var ExtensionScriptingStore: {
        initExtension(extension);
        getInitialScriptIdsMap(extension);
        persistAll(extension);
        clearOnUninstall(extensionId);
        _getStoreForTesting();
    };
}