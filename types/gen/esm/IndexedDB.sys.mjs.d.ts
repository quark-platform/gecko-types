declare module "resource://gre/modules/IndexedDB.sys.mjs" {
    export class IndexedDB {
        open(dbName?, options?);
        openForPrincipal(principal?, dbName?, options?);
        _wrapOpenRequest(request?);
        constructor(db);
        onupgradeneeded();
        transaction(storeNames?, mode?);
        objectStore(storeName?, mode?);
        createObjectStore();
    }
}