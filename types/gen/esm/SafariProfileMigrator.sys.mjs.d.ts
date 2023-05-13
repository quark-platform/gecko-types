declare module "resource://app/modules/SafariProfileMigrator.sys.mjs" {
    export class SafariProfileMigrator {
        get key();
        get displayNameL10nID();
        get brandImage();
        getResources();
        getLastUsedDate();
        hasPermissions();
        getPermissions();
        get mainPreferencesPropertyList();
    }
}