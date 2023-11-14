declare module "resource://app/modules/IEProfileMigrator.sys.mjs" {
    import type { MigratorBase } from "resource://app/modules/MigratorBase.sys.mjs";
    export class IEProfileMigrator extends MigratorBase {
        get key();
        get displayNameL10nID();
        get brandImage();
        getResources();
        getLastUsedDate();
    }
}