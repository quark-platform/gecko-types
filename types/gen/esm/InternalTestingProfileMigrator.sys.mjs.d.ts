declare module "resource://app/modules/InternalTestingProfileMigrator.sys.mjs" {
    export class InternalTestingProfileMigrator {
        get key();
        get displayNameL10nID();
        get sourceID();
        getSourceProfiles();
        getResources();
        flushResourceCache();
        get testProfile();
    }
}