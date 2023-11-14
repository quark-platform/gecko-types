declare module "resource://app/modules/DownloadSpamProtection.sys.mjs" {
    export class DownloadSpamProtection {
        update(url?, window?);
        getSpamListForWindow(window?);
        removeDownloadSpamForWindow(url?, window?);
        register(view?, window?);
        unregister(window?);
        _forWindowMap;
    }
}