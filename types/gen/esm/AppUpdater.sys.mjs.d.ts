declare module "resource://gre/modules/AppUpdater.sys.mjs" {
    export class AppUpdater {
        constructor();
        get update();
        check();
        allowUpdateDownload();
        stop();
        get status();
        addListener();
        removeListener();
        observe();
    }
}