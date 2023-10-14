declare module "resource://gre/modules/LightweightThemeManager.sys.mjs" {
    var LightweightThemeManager: {
        set fallbackThemeData(data);
        get currentThemeWithFallback(): any;
        get themeData(): any;
    };
}