declare module "resource://gre/modules/services-settings/IDBHelpers.sys.mjs" {
    export var IDBHelpers: {
        bulkOperationHelper;
        executeIDB;
        openIDB;
        destroyIDB;
        IndexedDBError;
        ShutdownError;
    };
}