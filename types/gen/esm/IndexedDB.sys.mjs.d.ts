declare module "resource://gre/modules/IndexedDB.sys.mjs" {
    export class IndexedDB {
        open();
        openForPrincipal();
        _wrapOpenRequest();
        constructor(db);
        onupgradeneeded();
        transaction();
        objectStore();
        createObjectStore();
    }
}