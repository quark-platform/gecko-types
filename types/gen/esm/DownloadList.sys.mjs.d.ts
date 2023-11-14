declare module "resource://gre/modules/DownloadList.sys.mjs" {
    export class DownloadList {
        constructor();
        getAll();
        add(download?);
        remove(download?);
        _change(download?);
        addView(view?);
        removeView(view?);
        _notifyAllViews(methodName?);
        removeFinished(filterFn?);
    }
    import type { DownloadList } from "resource://gre/modules/DownloadList.sys.mjs";
    export class DownloadCombinedList extends DownloadList {
        constructor(publicList, privateList);
        add(download?);
        remove(download?);
        onDownloadAdded(download?);
        onDownloadChanged(download?);
        onDownloadRemoved(download?);
    }
    export class DownloadSummary {
        constructor();
        bindToList(list?);
        addView(view?);
        removeView(view?);
        _onListChanged();
        onDownloadAdded(download?);
        onDownloadChanged(download?);
        onDownloadRemoved(download?);
    }
}