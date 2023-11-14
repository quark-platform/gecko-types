declare module "resource://app/modules/EdgeProfileMigrator.sys.mjs" {
    import type { MigratorBase } from "resource://app/modules/MigratorBase.sys.mjs";
    export class EdgeProfileMigrator extends MigratorBase {
        get key();
        get displayNameL10nID();
        get brandImage();
        getBookmarksMigratorForTesting(dbOverride?);
        getReadingListMigratorForTesting(dbOverride?);
        getHistoryDBMigratorForTesting(dbOverride?);
        getHistoryRegistryMigratorForTesting();
        getResources();
        getLastUsedDate();
        getSourceProfiles();
    }
}