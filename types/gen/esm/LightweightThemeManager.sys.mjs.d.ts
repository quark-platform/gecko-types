declare module "resource://gre/modules/LightweightThemeManager.sys.mjs" {
    export var LightweightThemeManager: {
        set fallbackThemeData(data);
        get currentThemeWithFallback(): any;
        get themeData(): any;
    };
}