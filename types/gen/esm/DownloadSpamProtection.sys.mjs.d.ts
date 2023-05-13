declare module "resource://app/modules/DownloadSpamProtection.sys.mjs" {
    export class DownloadSpamProtection {
        update();
        getSpamListForWindow();
        removeDownloadSpamForWindow();
        register();
        unregister();
    }
}