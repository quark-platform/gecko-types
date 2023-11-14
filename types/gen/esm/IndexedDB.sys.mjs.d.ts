declare module "resource://gre/modules/IndexedDB.sys.mjs" {
    export class IndexedDB {
        open(dbName?, options?, param2?);
        openForPrincipal(principal?, dbName?, options?, param3?);
        _wrapOpenRequest(request?, param1?);
        constructor(db);
        onupgradeneeded();
        transaction(storeNames?, mode?, param2?);
        objectStore(storeName?, mode?, param2?);
        createObjectStore(param0?);
    }
}