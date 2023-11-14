declare module "resource://gre/modules/GeckoViewModule.sys.mjs" {
    export class GeckoViewModule {
        initLogging(aModuleName?);
        constructor(aModuleInfo);
        get name();
        get enabled();
        get window();
        getActor(aActorName?);
        get browser();
        get messageManager();
        get eventDispatcher();
        get settings();
        get moduleManager();
        onInitBrowser();
        onDestroyBrowser();
        onInit();
        onDestroy();
        onSettingsUpdate();
        onEnable();
        onDisable();
        onLoadContentModule();
        onContentModuleLoaded();
        registerListener(aEventList?);
        unregisterListener(aEventList?);
    }
}