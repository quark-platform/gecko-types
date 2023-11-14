declare module "resource://app/modules/SafariProfileMigrator.sys.mjs" {
    import type { MigratorBase } from "resource://app/modules/MigratorBase.sys.mjs";
    export class SafariProfileMigrator extends MigratorBase {
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