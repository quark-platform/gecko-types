declare module "resource://app/modules/MigratorBase.sys.mjs" {
    export class MigratorBase {
        get key();
        get displayNameL10nID();
        get brandImage();
        getSourceProfiles();
        getResources(aProfile?);
        getLastUsedDate();
        get startupOnlyMigrator();
        get enabled();
        hasPermissions();
        getPermissions(win?);
        getMigrateData(aProfile?);
        migrate(aItems?, aStartup?, aProfile?, param3?);
        isSourceAvailable();
    }
}