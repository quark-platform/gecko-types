declare module "resource://gre/modules/services-settings/Database.sys.mjs" {
    export class Database {
        destroy();
        constructor(identifier);
        list();
        importChanges();
        getLastModified();
        getMetadata();
        getAttachment();
        saveAttachment();
        pruneAttachments();
        clear();
        create();
        update();
        delete();
    }
}