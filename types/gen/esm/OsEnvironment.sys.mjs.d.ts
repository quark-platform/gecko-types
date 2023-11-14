declare module "resource://gre/modules/OsEnvironment.sys.mjs" {
    export var OsEnvironment: {
        Policy: {
            getAllowedAppSources;
            windowsVersionHasAppSourcesFeature;
        };
        reportAllowedAppSources();
    };
}