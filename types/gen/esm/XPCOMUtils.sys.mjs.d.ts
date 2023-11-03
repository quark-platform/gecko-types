declare module "resource://gre/modules/XPCOMUtils.sys.mjs" {
    var XPCOMUtils: {
        defineLazyGetter(aObject?, aName?, aLambda?);
        defineLazyScriptGetter(aObject?, aNames?, aResource?);
        overrideScriptLoaderForTests(aObject?);
        defineLazyGlobalGetters(aObject?, aNames?);
        defineLazyServiceGetter(aObject?, aName?, aContract?, aInterfaceName?);
        defineLazyServiceGetters(aObject?, aServices?);
        defineLazyModuleGetter(aObject?, aName?, aResource?, aSymbol?, aPreLambda?, aPostLambda?, aProxy?);
        defineLazyModuleGetters(aObject?, aModules?);
        defineLazyPreferenceGetter(aObject?, aName?, aPreference?, aDefaultPrefValue?, aOnUpdate?, aTransform?);
        defineConstant(aObj?, aName?, aValue?);
    };
}