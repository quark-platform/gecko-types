declare module "resource://gre/modules/GeckoViewProcessHangMonitor.sys.mjs" {
    import type { GeckoViewModule } from "resource://gre/modules/GeckoViewModule.sys.mjs";
    export class GeckoViewProcessHangMonitor extends GeckoViewModule {
        constructor(aModuleInfo);
        onInit();
        onDestroy();
        onEnable();
        onDisable();
        onEvent(aEvent?, aData?, aCallback?);
        observe(aSubject?, aTopic?, aData?);
        get WAIT_EXPIRATION_TIME();
        stopHang(report?);
        pauseHang(report?);
        notifyReport(report?);
        reportHang(report?);
        clearHang(report?);
    }
}