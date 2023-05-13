declare module "resource://gre/modules/SyncedBookmarksMirror.sys.mjs" {
    export class SyncedBookmarksMirror {
        constructor(db);
        open();
        getCollectionHighWaterMark();
        setCollectionLastModified();
        getSyncId();
        ensureCurrentSyncId();
        store();
        apply();
        tryApply();
        merge();
        reset();
        fetchUnmergedGuids();
        storeRemoteBookmark();
        storeRemoteQuery();
        storeRemoteFolder();
        storeRemoteLivemark();
        storeRemoteSeparator();
        storeRemoteTombstone();
        maybeStoreRemoteURL();
        fetchLocalChangeRecords();
        finalize();
    }
}