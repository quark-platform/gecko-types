declare module "resource://app/modules/UrlbarUtils.sys.mjs" {
    var UrlbarUtils: {
        RESULT_GROUP: {
            ABOUT_PAGES;
            GENERAL;
            GENERAL_PARENT;
            FORM_HISTORY;
            HEURISTIC_AUTOFILL;
            HEURISTIC_ENGINE_ALIAS;
            HEURISTIC_EXTENSION;
            HEURISTIC_FALLBACK;
            HEURISTIC_BOOKMARK_KEYWORD;
            HEURISTIC_HISTORY_URL;
            HEURISTIC_OMNIBOX;
            HEURISTIC_PRELOADED;
            HEURISTIC_SEARCH_TIP;
            HEURISTIC_TEST;
            HEURISTIC_TOKEN_ALIAS_ENGINE;
            INPUT_HISTORY;
            OMNIBOX;
            PRELOADED;
            REMOTE_SUGGESTION;
            REMOTE_TAB;
            SUGGESTED_INDEX;
            TAIL_SUGGESTION;
        };
        PROVIDER_TYPE: {
            HEURISTIC: number;
            PROFILE: number;
            NETWORK: number;
            EXTENSION: number;
        };
        RESULT_TYPE: {
            TAB_SWITCH: number;
            SEARCH: number;
            URL: number;
            KEYWORD: number;
            OMNIBOX: number;
            REMOTE_TAB: number;
            TIP: number;
            DYNAMIC: number;
        };
        RESULT_SOURCE: {
            BOOKMARKS: number;
            HISTORY: number;
            SEARCH: number;
            TABS: number;
            OTHER_LOCAL: number;
            OTHER_NETWORK: number;
            ACTIONS: number;
            ADDON: number;
        };
        ICON: {
            EXTENSION;
            HISTORY;
            SEARCH_GLASS;
            TRENDING;
            TIP;
        };
        PAGE_UP_DOWN_DELTA: number;
        COMPOSITION: {
            NONE: number;
            COMPOSING: number;
            COMMIT: number;
            CANCELED: number;
        };
        MAX_TEXT_LENGTH: number;
        HIGHLIGHT: {
            NONE: number;
            TYPED: number;
            SUGGESTED: number;
        };
        TITLE_TAGS_SEPARATOR;
        REGEXP_SINGLE_WORD;
        SEARCH_MODE_ENTRY;
        PROTOCOLS_WITH_ICONS;
        PROTOCOLS_WITHOUT_AUTHORITY;
        get LOCAL_SEARCH_MODES(): any;
        getPayloadSchema(type);
        addToUrlbarHistory(url, window);
        getShortcutOrURIAndPostData(url);
        getPostDataStream(postDataString);
        _compareIgnoringDiacritics;
        getTokenMatches(tokens, str, highlightType);
        getResultGroup(result);
        getUrlFromResult(result);
        getSearchQueryUrl(engine, query);
        getPrefixRank(prefix);
        getSpanForResult(result);
        getIconForUrl(url);
        searchModeForToken(token);
        setupSpeculativeConnection(urlOrEngine, window);
        stripPrefixAndTrim(spec);
        stripPublicSuffixFromHost(host);
        stripUnsafeProtocolOnPaste(pasteData);
        addToInputHistory(url, input);
        isPasteEvent(event);
        looksLikeSingleWordHost(value);
        substringAt(sourceStr, targetStr);
        substringAfter(sourceStr, targetStr);
        stripURLPrefix(str);
        getHeuristicResultFor(searchString);
        getLogger();
        getResultSourceName(source);
        addToFormHistory(input, value, source);
        canAutofillURL(url, candidate);
        telemetryTypeFromResult(result);
        unEscapeURIForUI(uri);
        searchEngagementTelemetryGroup(result);
        searchEngagementTelemetryType(result);
        searchEngagementTelemetrySubtype(result, element);
    };
    export class UrlbarQueryContext {
        constructor();
        _checkRequiredOptions();
        get fixupInfo();
        get fixupError();
        allowRemoteResults();
    }
    export class UrlbarMuxer {
        get name();
        sort();
    }
    export class UrlbarProvider {
        constructor();
        get name();
        get type();
        tryMethod();
        isActive();
        getPriority();
        startQuery();
        cancelQuery();
        pickResult();
        blockResult();
        onEngagement();
        onSelection();
        getViewUpdate();
        get deferUserSelection();
    }
    export class SkippableTimer {
        constructor();
        cancel();
        _log();
    }
    export class L10nCache {
        constructor(l10n);
        get();
        add();
        ensure();
        ensureAll();
        delete();
        clear();
        size();
        observe();
        _key();
    }
    export class TaskQueue {
        get emptyPromise();
        queue();
        _doNextTask();
    }
}