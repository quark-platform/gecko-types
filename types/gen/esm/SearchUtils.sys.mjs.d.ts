declare module "resource://gre/modules/SearchUtils.sys.mjs" {
    var SearchUtils: {
        BROWSER_SEARCH_PREF;
        SETTINGS_KEY;
        SETTINGS_IGNORELIST_KEY;
        SETTINGS_ALLOWLIST_KEY;
        TOPIC_SEARCH_SERVICE;
        TOPIC_ENGINE_MODIFIED;
        MODIFIED_TYPE: {
            CHANGED;
            LOADED;
            REMOVED;
            ADDED;
            DEFAULT;
            DEFAULT_PRIVATE;
        };
        URL_TYPE: {
            SUGGEST_JSON;
            SEARCH;
            OPENSEARCH;
            TRENDING_JSON;
        };
        ENGINES_URLS: {};
        MAX_ICON_SIZE: number;
        DEFAULT_QUERY_CHARSET;
        DEFAULT_TAG;
        MOZ_PARAM: {
            DATE;
            LOCALE;
        };
        PARAM_PURPOSES: {
            CONTEXTMENU;
            HOMEPAGE;
            KEYWORD;
            NEWTAB;
            SEARCHBAR;
        };
        LoadListener;
        GENERAL_SEARCH_ENGINE_IDS;
        notifyAction(engine?, verb?);
        makeURI(urlSpec?);
        makeChannel(url?);
        isPartnerBuild();
        get SETTINGS_VERSION(): any;
        get MODIFIED_APP_CHANNEL(): any;
        sanitizeName(name?);
        getVerificationHash(name?);
        isSecureURIForOpenSearch(uri?);
    };
}