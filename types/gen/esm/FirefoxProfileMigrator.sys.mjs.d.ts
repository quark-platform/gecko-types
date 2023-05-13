declare module "resource://app/modules/FirefoxProfileMigrator.sys.mjs" {
    export class FirefoxProfileMigrator {
        get key();
        get displayNameL10nID();
        _getAllProfiles();
        getSourceProfiles();
        _getFileObject();
        getResources();
        getLastUsedDate();
        _getResourcesInternal();
        get startupOnlyMigrator();
    }
}