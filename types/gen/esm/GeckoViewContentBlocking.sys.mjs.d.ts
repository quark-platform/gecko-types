declare module "resource://gre/modules/GeckoViewContentBlocking.sys.mjs" {
    import type { GeckoViewModule } from "resource://gre/modules/GeckoViewModule.sys.mjs";
    export class GeckoViewContentBlocking extends GeckoViewModule {
        onEnable();
        onDisable();
        onEvent();
        onContentBlockingEvent();
    }
}