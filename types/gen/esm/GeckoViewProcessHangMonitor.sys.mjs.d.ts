declare module "resource://gre/modules/GeckoViewProcessHangMonitor.sys.mjs" {
    import type { GeckoViewModule } from "resource://gre/modules/GeckoViewModule.sys.mjs";
    export class GeckoViewProcessHangMonitor extends GeckoViewModule {
        constructor(aModuleInfo);
        onInit();
        onDestroy();
        onEnable();
        onDisable();
        onEvent();
        observe();
        get WAIT_EXPIRATION_TIME();
        stopHang();
        pauseHang();
        notifyReport();
        reportHang();
        clearHang();
    }
}