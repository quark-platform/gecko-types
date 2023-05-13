declare module "resource://gre/modules/mozIntl.sys.mjs" {
    export class MozIntl {
        constructor();
        observe();
        getCalendarInfo();
        getDisplayNamesDeprecated();
        getAvailableLocaleDisplayNames();
        getLanguageDisplayNames();
        getRegionDisplayNames();
        getLocaleDisplayNames();
        getScriptDirection();
        get DateTimeFormat();
        get DisplayNames();
    }
}