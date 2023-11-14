declare module "resource://gre/modules/ExtensionWorkerChild.sys.mjs" {
    export var ExtensionWorkerChild: {
        extensionWorkerContexts;
        apiManager;
        initExtensionWorkerContext(extension?, serviceWorkerInfo?);
        getExtensionWorkerContext(extension?, serviceWorkerInfo?);
        notifyExtensionWorkerContextLoaded(descriptorId?, policy?);
        destroyExtensionWorkerContext(descriptorId?);
        shutdownExtension(extensionId?);
    };
}