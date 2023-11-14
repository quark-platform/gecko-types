declare module "resource://gre/modules/LangPackMatcher.sys.mjs" {
    export var LangPackMatcher: {
        negotiateLangPackForLanguageMismatch;
        ensureLangPackInstalled;
        getAppAndSystemLocaleInfo;
        setRequestedAppLocales;
        getAvailableLocales;
        mockable;
    };
}