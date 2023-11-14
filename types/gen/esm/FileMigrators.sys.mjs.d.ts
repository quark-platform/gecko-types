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
    import type { FileMigratorBase } from "resource://app/modules/FileMigrators.sys.mjs";
    export class PasswordFileMigrator extends FileMigratorBase {
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
    import type { FileMigratorBase } from "resource://app/modules/FileMigrators.sys.mjs";
    export class BookmarksFileMigrator extends FileMigratorBase {
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