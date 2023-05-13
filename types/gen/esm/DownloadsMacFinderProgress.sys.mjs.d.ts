declare module "resource://app/modules/DownloadsMacFinderProgress.sys.mjs" {
    var DownloadsMacFinderProgress: {
        _finderProgresses;
        register();
        onDownloadAdded(download);
        onDownloadChanged(download);
        onDownloadRemoved(download);
    };
}