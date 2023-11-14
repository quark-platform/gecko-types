declare module "resource://gre/modules/mozIntl.sys.mjs" {
    export class MozIntl {
        constructor();
        observe();
        getCalendarInfo(locales?);
        getDisplayNamesDeprecated(locales?);
        getAvailableLocaleDisplayNames(type?);
        getLanguageDisplayNames(locales?, langCodes?);
        getRegionDisplayNames(locales?, regionCodes?);
        getLocaleDisplayNames(locales?, localeCodes?);
        getScriptDirection(locale?);
        get DateTimeFormat();
        get DisplayNames();
    }
}