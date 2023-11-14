declare module "resource://gre/modules/SyncedBookmarksMirror.sys.mjs" {
    export class SyncedBookmarksMirror {
        constructor(db, param1, param2);
        open(options?);
        getCollectionHighWaterMark();
        setCollectionLastModified(lastModifiedSeconds?);
        getSyncId();
        ensureCurrentSyncId(newSyncId?);
        store(records?, param1?);
        apply(param0?);
        tryApply(signal?, localTimeSeconds?, remoteTimeSeconds?, param3?);
        merge(signal?, param1?, param2?);
        reset();
        fetchUnmergedGuids();
        storeRemoteBookmark(record?, param1?);
        storeRemoteQuery(record?, param1?);
        storeRemoteFolder(record?, param1?);
        storeRemoteLivemark(record?, param1?);
        storeRemoteSeparator(record?, param1?);
        storeRemoteTombstone(record?, param1?);
        maybeStoreRemoteURL(url?);
        fetchLocalChangeRecords(signal?);
        finalize(param0?);
    }
}