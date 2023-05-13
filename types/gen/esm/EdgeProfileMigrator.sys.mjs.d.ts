declare module "resource://app/modules/EdgeProfileMigrator.sys.mjs" {
    export class EdgeProfileMigrator {
        get key();
        get displayNameL10nID();
        get brandImage();
        getBookmarksMigratorForTesting();
        getReadingListMigratorForTesting();
        getResources();
        getLastUsedDate();
        getSourceProfiles();
    }
}