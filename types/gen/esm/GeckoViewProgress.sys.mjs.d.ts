declare module "resource://gre/modules/GeckoViewProgress.sys.mjs" {
    export class GeckoViewProgress {
        onEnable();
        onDisable();
        receiveMessage();
        onEvent();
        onStateChange();
        onSecurityChange();
        onLocationChange();
        _fireInitialLoad();
        observe();
    }
}