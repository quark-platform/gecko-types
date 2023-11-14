declare module "resource://gre/modules/DownloadHistory.sys.mjs" {
    export var DownloadHistory: {
        getList();
        _listPromises: {};
        addDownloadToHistory(download?);
        updateMetaData(download?);
        _updateHistoryListData(sourceUrl?);
    };
}