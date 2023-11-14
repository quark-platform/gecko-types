declare module "resource://app/modules/DownloadsTaskbar.sys.mjs" {
    export var DownloadsTaskbar: {
        _summary;
        _taskbarProgress;
        registerIndicator(aBrowserWindow?);
        _attachIndicator(aWindow?);
        _attachGtkTaskbarProgress(aWindow?);
        onSummaryChanged();
    };
}