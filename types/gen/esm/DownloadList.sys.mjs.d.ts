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
    import type { DownloadList } from "resource://gre/modules/DownloadList.sys.mjs";
    export class DownloadCombinedList extends DownloadList {
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