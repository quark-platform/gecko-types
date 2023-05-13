declare module "resource://app/modules/InternalTestingProfileMigrator.sys.mjs" {
    export class InternalTestingProfileMigrator {
        get key();
        get displayNameL10nID();
        getResources();
        flushResourceCache();
    }
}