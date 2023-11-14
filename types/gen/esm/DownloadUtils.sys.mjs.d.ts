declare module "resource://gre/modules/DownloadUtils.sys.mjs" {
    export var DownloadUtils: {
        getDownloadStatus;
        getDownloadStatusNoRate;
        _deriveTransferRate;
        getTransferTotal;
        getTimeLeft;
        getReadableDates;
        getURIHost;
        convertByteUnits;
        convertTimeUnits;
        getFormattedTimeStatus;
    };
}