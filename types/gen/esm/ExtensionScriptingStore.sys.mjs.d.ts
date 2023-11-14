declare module "resource://gre/modules/ExtensionScriptingStore.sys.mjs" {
    export var makeInternalContentScript;
    export var makePublicContentScript;
    export var ExtensionScriptingStore: {
        initExtension(extension?);
        getInitialScriptIdsMap(extension?);
        persistAll(extension?);
        clearOnUninstall(extensionId?);
        _getStoreForTesting();
    };
}