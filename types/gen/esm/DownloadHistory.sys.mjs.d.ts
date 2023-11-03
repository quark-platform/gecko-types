declare module "resource://gre/modules/DownloadHistory.sys.mjs" {
    var DownloadHistory: {
        getList();
        _listPromises: {};
        addDownloadToHistory(download?);
        updateMetaData(download?);
        _updateHistoryListData(sourceUrl?);
    };
}