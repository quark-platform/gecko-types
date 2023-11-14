declare module "resource://gre/modules/GeckoViewProgress.sys.mjs" {
    import type { GeckoViewModule } from "resource://gre/modules/GeckoViewModule.sys.mjs";
    export class GeckoViewProgress extends GeckoViewModule {
        onEnable();
        onDisable();
        receiveMessage(aMsg?);
        onEvent(aEvent?, aData?, aCallback?);
        onStateChange(param0?);
        onSecurityChange(param0?);
        onLocationChange(param0?);
        _fireInitialLoad();
        observe(aSubject?, aTopic?, aData?);
    }
}