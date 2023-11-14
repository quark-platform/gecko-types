declare module "resource://gre/modules/GeckoViewSelectionAction.sys.mjs" {
    import type { GeckoViewModule } from "resource://gre/modules/GeckoViewModule.sys.mjs";
    export class GeckoViewSelectionAction extends GeckoViewModule {
        onEnable();
        onDisable();
        get actor();
        onEvent(aEvent?, aData?, aCallback?);
    }
}