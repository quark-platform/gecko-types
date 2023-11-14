declare module "resource://gre/modules/AppUpdater.sys.mjs" {
    export class AppUpdater {
        constructor();
        get update();
        check();
        allowUpdateDownload();
        stop();
        get status();
        addListener(listener?);
        removeListener(listener?);
        observe(subject?, topic?, status?);
    }
}