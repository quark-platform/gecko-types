declare module "resource://gre/modules/services-settings/SyncHistory.sys.mjs" {
    export class SyncHistory {
        constructor(source, param1);
        store(etag?, status?, param2?);
        list();
        last();
        clear();
    }
}