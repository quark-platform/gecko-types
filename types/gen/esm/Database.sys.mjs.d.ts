declare module "resource://gre/modules/services-settings/Database.sys.mjs" {
    export class Database {
        destroy();
        constructor(identifier);
        list();
        importChanges(metadata?, timestamp?);
        getLastModified();
        getMetadata();
        getAttachment(attachmentId?);
        saveAttachment(attachmentId?, attachment?);
        pruneAttachments(excludeIds?);
        clear();
        create(record?);
        update(record?);
        delete(recordId?);
    }
}