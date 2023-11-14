declare module "resource://gre/modules/ExtensionChildDevToolsUtils.sys.mjs" {
    export var ExtensionChildDevToolsUtils: {
        initThemeChangeObserver(themeName?, context?);
        getThemeChangeObserver();
    };
}