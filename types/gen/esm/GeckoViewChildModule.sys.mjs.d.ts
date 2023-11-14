declare module "resource://gre/modules/GeckoViewChildModule.sys.mjs" {
    export class GeckoViewChildModule {
        initLogging(aModuleName?);
        create(aGlobal?, aModuleName?);
        constructor(aModuleName, aGlobal);
        onInit();
        onEnable();
        onDisable();
    }
}