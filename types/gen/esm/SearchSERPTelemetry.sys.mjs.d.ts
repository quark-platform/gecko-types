declare module "resource://app/modules/SearchSERPTelemetry.sys.mjs" {
    export var TELEMETRY_SETTINGS_KEY;
    export var TELEMETRY_CATEGORIZATION_KEY;
    export var SearchSERPTelemetryUtils: {
        ACTIONS: {
            CLICKED;
            EXPANDED;
            SUBMITTED;
        };
        COMPONENTS: {
            AD_CAROUSEL;
            AD_LINK;
            AD_SIDEBAR;
            AD_SITELINK;
            INCONTENT_SEARCHBOX;
            NON_ADS_LINK;
            REFINED_SEARCH_BUTTONS;
            SHOPPING_TAB;
        };
        ABANDONMENTS: {
            NAVIGATION;
            TAB_CLOSE;
            WINDOW_CLOSE;
        };
        INCONTENT_SOURCES: {
            OPENED_IN_NEW_TAB;
            REFINE_ON_SERP;
            SEARCHBOX;
        };
        CATEGORIZATION: {
            INCONCLUSIVE: number;
        };
    };
    export var SearchSERPDomainToCategoriesMap;
    export var SearchSERPTelemetry;
    export var SearchSERPCategorization;
}