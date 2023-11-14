declare module "resource://gre/modules/services-common/kinto-storage-adapter.sys.mjs" {
    export class FirefoxAdapter {
        constructor(collection, param1);
        _init(connection?);
        _executeStatement(statement?, params?);
        openConnection(options?);
        clear();
        execute(callback?, param1?);
        get(id?);
        list(param0?);
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