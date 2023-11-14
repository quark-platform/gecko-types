declare module "resource://gre/modules/services-common/kinto-storage-adapter.sys.mjs" {
    export class FirefoxAdapter {
        constructor(collection);
        _init(connection?);
        _executeStatement(statement?, params?);
        openConnection(options?);
        clear();
        execute(callback?);
        get(id?);
        list();
        loadDump(records?);
        importBulk(records?);
        saveLastModified(lastModified?);
        getLastModified();
        saveMetadata(metadata?);
        getMetadata();
        calculateStorage();
        resetSyncStatus();
    }
}