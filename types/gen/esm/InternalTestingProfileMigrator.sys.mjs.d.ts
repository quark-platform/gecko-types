declare module "resource://app/modules/InternalTestingProfileMigrator.sys.mjs" {
    import type { MigratorBase } from "resource://app/modules/MigratorBase.sys.mjs";
    export class InternalTestingProfileMigrator extends MigratorBase {
        get key();
        get displayNameL10nID();
        get sourceID();
        getSourceProfiles();
        getResources();
        flushResourceCache();
        get testProfile();
    }
}