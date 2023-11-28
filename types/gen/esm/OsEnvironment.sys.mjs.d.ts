declare module "resource://gre/modules/OsEnvironment.sys.mjs" {export namespace OsEnvironment {
    namespace Policy {
        function getAllowedAppSources(): any;
        function windowsVersionHasAppSourcesFeature(): boolean;
    }
    function reportAllowedAppSources(): void;
}
}