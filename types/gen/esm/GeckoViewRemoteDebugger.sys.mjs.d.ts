declare module "resource://gre/modules/GeckoViewRemoteDebugger.sys.mjs" {
    export var GeckoViewRemoteDebugger: {
        observe(aSubject?, aTopic?, aData?);
        onInit();
        onEnable();
        onDisable();
    };
}