declare module "resource://app/modules/DownloadsCommon.sys.mjs" {
    var DownloadsCommon: {
        DOWNLOAD_NOTSTARTED;
        DOWNLOAD_DOWNLOADING: number;
        DOWNLOAD_FINISHED: number;
        DOWNLOAD_FAILED: number;
        DOWNLOAD_CANCELED: number;
        DOWNLOAD_PAUSED: number;
        DOWNLOAD_BLOCKED_PARENTAL: number;
        DOWNLOAD_DIRTY: number;
        DOWNLOAD_BLOCKED_POLICY: number;
        ATTENTION_NONE;
        ATTENTION_SUCCESS;
        ATTENTION_INFO;
        ATTENTION_WARNING;
        ATTENTION_SEVERE;
        SUPPRESS_NONE: number;
        SUPPRESS_PANEL_OPEN: number;
        SUPPRESS_ALL_DOWNLOADS_OPEN: number;
        SUPPRESS_CONTENT_AREA_DOWNLOADS_OPEN: number;
        get strings(): any;
        get openInSystemViewerItemEnabled(): any;
        get alwaysOpenInSystemViewerItemEnabled(): any;
        getData(window, history, privateAll, limited);
        initializeAllDataLinks();
        getIndicatorData(aWindow);
        getSummary(aWindow, aNumToExclude);
        _summary;
        _privateSummary;
        stateOfDownload(download);
        deleteDownload(download);
        deleteDownloadFiles(download, clearHistory);
        getMimeInfo(download);
        isFileOfType(download, mimeType);
        copyDownloadLink(download);
        summarizeDownloads(downloads);
        smoothSeconds(aSeconds, aLastSeconds);
        openDownload(download, options);
        showDownloadedFile(aFile);
        showDirectory(aDirectory);
        confirmUnblockDownload(param0);
    };
}