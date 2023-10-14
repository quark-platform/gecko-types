declare module "resource://app/modules/FileMigrators.sys.mjs" {
    export class FileMigratorBase {
        get key();
        get displayNameL10nID();
        get brandImage();
        get enabled();
        get progressHeaderL10nID();
        get successHeaderL10nID();
        getFilePickerConfig();
        get displayedResourceTypes();
        migrate();
    }
    export class PasswordFileMigrator {
        get key();
        get displayNameL10nID();
        get brandImage();
        get enabled();
        get displayedResourceTypes();
        get progressHeaderL10nID();
        get successHeaderL10nID();
        getFilePickerConfig();
        migrate();
    }
    export class BookmarksFileMigrator {
        get key();
        get displayNameL10nID();
        get brandImage();
        get enabled();
        get displayedResourceTypes();
        get progressHeaderL10nID();
        get successHeaderL10nID();
        getFilePickerConfig();
        migrate();
    }
}