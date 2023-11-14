declare module "resource://app/modules/DownloadsMacFinderProgress.sys.mjs" {
    export var DownloadsMacFinderProgress: {
        _finderProgresses;
        register();
        onDownloadAdded(download?);
        onDownloadChanged(download?);
        onDownloadRemoved(download?);
    };
}