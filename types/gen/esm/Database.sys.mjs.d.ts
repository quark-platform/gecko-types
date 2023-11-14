declare module "resource://gre/modules/services-settings/Database.sys.mjs" {
    export class Database {
        destroy();
        constructor(identifier);
        list(param0?);
        importChanges(metadata?, timestamp?, param2?, param3?);
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