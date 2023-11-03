declare module "resource://gre/modules/Sqlite.sys.mjs" {
    var Sqlite: {
        TRANSACTIONS_TIMEOUT_MS: number;
        openConnection;
        cloneStorageConnection;
        wrapStorageConnection;
        get shutdown(): any;
        failTestsOnAutoClose(enabled?);
    };
}