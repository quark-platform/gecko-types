declare module "resource://gre/modules/services-settings/SyncHistory.sys.mjs" {
    export class SyncHistory {
        constructor(source);
        store();
        list();
        last();
        clear();
    }
}