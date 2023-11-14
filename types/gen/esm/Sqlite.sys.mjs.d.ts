declare module "resource://gre/modules/Sqlite.sys.mjs" {
    export var Sqlite: {
        TRANSACTIONS_TIMEOUT_MS: number;
        openConnection;
        cloneStorageConnection;
        wrapStorageConnection;
        get shutdown(): any;
        failTestsOnAutoClose(enabled?);
    };
}