declare module "resource://app/modules/MSMigrationUtils.sys.mjs" {
    var MSMigrationUtils: {
        MIGRATION_TYPE_IE: number;
        MIGRATION_TYPE_EDGE: number;
        CtypesKernelHelpers;
        getBookmarksMigrator(migrationType?);
        getWindowsVaultFormPasswordsMigrator();
        getTypedURLs;
        getEdgeLocalDataFolder;
    };
}