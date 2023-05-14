declare module "resource://gre/modules/GeckoViewProcessHangMonitor.sys.mjs" {
    export class GeckoViewProcessHangMonitor {
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