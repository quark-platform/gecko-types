declare module "resource://gre/modules/GeckoViewRemoteDebugger.sys.mjs" {export namespace GeckoViewRemoteDebugger {
    function observe(aSubject: any, aTopic: any, aData: any): void;
    function onInit(): void;
    function onEnable(): void;
    function onDisable(): void;
}
}