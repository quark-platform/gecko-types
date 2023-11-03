declare module "resource://gre/modules/GeckoViewRemoteDebugger.sys.mjs" {
    var GeckoViewRemoteDebugger: {
        observe(aSubject?, aTopic?, aData?);
        onInit();
        onEnable();
        onDisable();
    };
}