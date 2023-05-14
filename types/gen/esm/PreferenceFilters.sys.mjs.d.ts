declare module "resource://gre/modules/components-utils/PreferenceFilters.sys.mjs" {
    var PreferenceFilters: {
        preferenceValue(prefKey, defaultValue);
        preferenceIsUserSet(prefKey);
        preferenceExists(prefKey);
    };
}