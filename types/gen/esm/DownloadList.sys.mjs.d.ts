declare module "resource://gre/modules/DownloadList.sys.mjs" {
    export class DownloadList {
        constructor();
        getAll();
        add();
        remove();
        _change();
        addView();
        removeView();
        _notifyAllViews();
        removeFinished();
    }
    export class DownloadCombinedList {
        constructor(publicList, privateList);
        add();
        remove();
        onDownloadAdded();
        onDownloadChanged();
        onDownloadRemoved();
    }
    export class DownloadSummary {
        constructor();
        bindToList();
        addView();
        removeView();
        _onListChanged();
        onDownloadAdded();
        onDownloadChanged();
        onDownloadRemoved();
    }
}