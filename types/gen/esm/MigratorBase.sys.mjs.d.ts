declare module "resource://app/modules/MigratorBase.sys.mjs" {
    export class MigratorBase {
        get key();
        get displayNameL10nID();
        get brandImage();
        getSourceProfiles();
        getResources();
        getLastUsedDate();
        get startupOnlyMigrator();
        get enabled();
        hasPermissions();
        getPermissions();
        getMigrateData();
        migrate();
        isSourceAvailable();
    }
}