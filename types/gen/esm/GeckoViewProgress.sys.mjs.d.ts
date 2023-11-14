declare module "resource://gre/modules/GeckoViewProgress.sys.mjs" {
    import type { GeckoViewModule } from "resource://gre/modules/GeckoViewModule.sys.mjs";
    export class GeckoViewProgress extends GeckoViewModule {
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