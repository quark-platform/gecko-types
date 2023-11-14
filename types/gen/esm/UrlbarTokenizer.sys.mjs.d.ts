declare module "resource://app/modules/UrlbarTokenizer.sys.mjs" {
    export var UrlbarTokenizer: {
        REGEXP_SPACES;
        REGEXP_SPACES_START;
        REGEXP_LIKE_PROTOCOL;
        REGEXP_USERINFO_INVALID_CHARS;
        REGEXP_HOSTPORT_INVALID_CHARS;
        REGEXP_SINGLE_WORD_HOST;
        REGEXP_HOSTPORT_IP_LIKE;
        REGEXP_HOSTPORT_INVALID_IP;
        REGEXP_HOSTPORT_IPV4;
        REGEXP_HOSTPORT_IPV6;
        REGEXP_COMMON_EMAIL;
        REGEXP_HAS_PORT;
        REGEXP_PERCENT_ENCODED_START;
        REGEXP_PREFIX;
        TYPE: {
            TEXT: number;
            POSSIBLE_ORIGIN: number;
            POSSIBLE_URL: number;
            RESTRICT_HISTORY: number;
            RESTRICT_BOOKMARK: number;
            RESTRICT_TAG: number;
            RESTRICT_OPENPAGE: number;
            RESTRICT_SEARCH: number;
            RESTRICT_TITLE: number;
            RESTRICT_URL: number;
            RESTRICT_ACTION: number;
        };
        RESTRICT: {
            HISTORY;
            BOOKMARK;
            TAG;
            OPENPAGE;
            SEARCH;
            TITLE;
            URL;
            ACTION;
        };
        get SEARCH_MODE_RESTRICT(): any;
        looksLikeUrl(token?);
        looksLikeOrigin(token?);
        tokenize(queryContext?);
        isRestrictionToken(token?);
    };
}