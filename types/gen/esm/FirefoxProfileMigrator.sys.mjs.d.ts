declare module "resource://app/modules/FirefoxProfileMigrator.sys.mjs" {
    import type { MigratorBase } from "resource://app/modules/MigratorBase.sys.mjs";
    export class FirefoxProfileMigrator extends MigratorBase {
        get key();
        get displayNameL10nID();
        get brandImage();
        _getAllProfiles();
        getSourceProfiles();
        _getFileObject();
        getResources();
        getLastUsedDate();
        _getResourcesInternal();
        get startupOnlyMigrator();
    }
}