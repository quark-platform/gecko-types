declare module "resource://gre/modules/services-common/kinto-storage-adapter.sys.mjs" {
    export class FirefoxAdapter {
        constructor(collection);
        _init();
        _executeStatement();
        openConnection();
        clear();
        execute();
        get();
        list();
        loadDump();
        importBulk();
        saveLastModified();
        getLastModified();
        saveMetadata();
        getMetadata();
        calculateStorage();
        resetSyncStatus();
    }
}