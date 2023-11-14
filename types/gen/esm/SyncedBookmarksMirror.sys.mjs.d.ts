declare module "resource://gre/modules/SyncedBookmarksMirror.sys.mjs" {
    export class SyncedBookmarksMirror {
        constructor(db);
        open(options?);
        getCollectionHighWaterMark();
        setCollectionLastModified(lastModifiedSeconds?);
        getSyncId();
        ensureCurrentSyncId(newSyncId?);
        store(records?);
        apply();
        tryApply(signal?, localTimeSeconds?, remoteTimeSeconds?);
        merge(signal?);
        reset();
        fetchUnmergedGuids();
        storeRemoteBookmark(record?);
        storeRemoteQuery(record?);
        storeRemoteFolder(record?);
        storeRemoteLivemark(record?);
        storeRemoteSeparator(record?);
        storeRemoteTombstone(record?);
        maybeStoreRemoteURL(url?);
        fetchLocalChangeRecords(signal?);
        finalize();
    }
}