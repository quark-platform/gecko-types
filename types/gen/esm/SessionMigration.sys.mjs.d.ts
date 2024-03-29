declare module "resource://app/modules/sessionstore/SessionMigration.sys.mjs" {export namespace SessionMigration {
    /**
     * Migrate a limited set of session data from one path to another.
     */
    function migrate(aFromPath: any, aToPath: any): Promise<void>;
}
}