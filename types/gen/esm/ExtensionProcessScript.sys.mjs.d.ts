declare module "resource://gre/modules/ExtensionProcessScript.sys.mjs" {
    var ExtensionProcessScript: {
        extensions;
        initExtension(extension?);
        initExtensionDocument(policy?, doc?, privileged?);
        getExtensionChild(id?);
        preloadContentScript(contentScript?);
        loadContentScript(contentScript?, window?);
    };
    var ExtensionAPIRequestHandler: {
        initExtensionWorker(policy?, serviceWorkerInfo?);
        onExtensionWorkerLoaded(policy?, serviceWorkerDescriptorId?);
        onExtensionWorkerDestroyed(policy?, serviceWorkerDescriptorId?);
        handleAPIRequest(policy?, request?);
        getExtensionContextForAPIRequest(param0?);
        validateAndNormalizeRequestArgs(param0?);
    };
}