declare module "resource://gre/modules/mozIntl.sys.mjs" {
    export class MozIntl {
        constructor();
        observe();
        getCalendarInfo(locales?, param1?);
        getDisplayNamesDeprecated(locales?, param1?);
        getAvailableLocaleDisplayNames(type?);
        getLanguageDisplayNames(locales?, langCodes?);
        getRegionDisplayNames(locales?, regionCodes?);
        getLocaleDisplayNames(locales?, localeCodes?, param2?);
        getScriptDirection(locale?);
        get DateTimeFormat();
        get DisplayNames();
    }
}