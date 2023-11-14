declare module "resource://gre/modules/addons/AddonUpdateChecker.sys.mjs" {
    export var AddonUpdateChecker: {
        getCompatibilityUpdate(aUpdates?, aVersion?, aIgnoreCompatibility?, aAppVersion?, aPlatformVersion?, aIgnoreMaxVersion?, aIgnoreStrictCompat?);
        getNewestCompatibleUpdate(aUpdates?, aAddon?, aAppVersion?, aPlatformVersion?, aIgnoreMaxVersion?, aIgnoreStrictCompat?);
        checkForUpdates(aId?, aUrl?, aObserver?);
    };
}