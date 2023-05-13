declare module "resource://gre/modules/GeckoViewModule.sys.mjs" {
    export class GeckoViewModule {
        initLogging();
        constructor(aModuleInfo);
        get name();
        get enabled();
        get window();
        getActor();
        get browser();
        get messageManager();
        get eventDispatcher();
        get settings();
        get moduleManager();
        onInitBrowser();
        onInit();
        onDestroy();
        onSettingsUpdate();
        onEnable();
        onDisable();
        onLoadContentModule();
        onContentModuleLoaded();
        registerListener();
        unregisterListener();
    }
}