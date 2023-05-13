declare module "resource://gre/modules/LangPackMatcher.sys.mjs" {
    var LangPackMatcher: {
        negotiateLangPackForLanguageMismatch;
        ensureLangPackInstalled;
        getAppAndSystemLocaleInfo;
        setRequestedAppLocales;
        getAvailableLocales;
        mockable;
    };
}