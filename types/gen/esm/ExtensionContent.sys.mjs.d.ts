declare module "resource://gre/modules/ExtensionContent.sys.mjs" {
    var ExtensionContent: {
        BrowserExtensionContent;
        contentScripts;
        shutdownExtension(extension?);
        getContentScriptGlobals(window?);
        initExtensionContext(extension?, window?);
        getContext(extension?, window?);
        getContextByExtensionId(extensionId?, window?);
        handleDetectLanguage(param0?);
        handleActivateScripts(param0?);
        handleActorExecute(param0?);
    };
    export class ExtensionContentChild extends JSProcessActorChild {
        receiveMessage();
    }
}