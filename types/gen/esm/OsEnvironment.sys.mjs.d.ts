declare module "resource://gre/modules/OsEnvironment.sys.mjs" {
    var OsEnvironment: {
        Policy: {
            getAllowedAppSources;
            windowsVersionHasAppSourcesFeature;
        };
        reportAllowedAppSources();
    };
}