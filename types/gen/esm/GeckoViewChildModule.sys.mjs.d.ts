declare module "resource://gre/modules/GeckoViewChildModule.sys.mjs" {
    export class GeckoViewChildModule {
        initLogging();
        create();
        constructor(aModuleName, aGlobal);
        onInit();
        onEnable();
        onDisable();
    }
}