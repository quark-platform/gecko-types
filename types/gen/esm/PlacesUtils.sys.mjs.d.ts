declare module "resource://gre/modules/PlacesUtils.sys.mjs" {
    var PlacesUtils: {
        TYPE_X_MOZ_PLACE_CONTAINER;
        TYPE_X_MOZ_PLACE_SEPARATOR;
        TYPE_X_MOZ_PLACE;
        TYPE_X_MOZ_URL;
        TYPE_HTML;
        TYPE_PLAINTEXT;
        TYPE_X_MOZ_PLACE_ACTION;
        LMANNO_FEEDURI;
        LMANNO_SITEURI;
        CHARSET_ANNO;
        MOBILE_ROOT_ANNO;
        TOPIC_SHUTDOWN;
        TOPIC_INIT_COMPLETE;
        TOPIC_DATABASE_LOCKED;
        TOPIC_EXPIRATION_FINISHED;
        TOPIC_FAVICONS_EXPIRED;
        TOPIC_VACUUM_STARTING;
        TOPIC_BOOKMARKS_RESTORE_BEGIN;
        TOPIC_BOOKMARKS_RESTORE_SUCCESS;
        TOPIC_BOOKMARKS_RESTORE_FAILED;
        observers;
        virtualAllBookmarksGuid;
        virtualHistoryGuid;
        virtualDownloadsGuid;
        virtualTagsGuid;
        isVirtualLeftPaneItem(guid);
        asContainer;
        asQuery;
        endl;
        isValidGuid(guid);
        isValidGuidPrefix(guidPrefix);
        generateGuidWithPrefix(prefix);
        toURI(url);
        toPRTime(date);
        toDate(time);
        toISupportsString;
        getFormattedString;
        getString;
        parseActionUrl(url);
        isQueryGeneratedFolder(node);
        nodeIsFolder;
        nodeIsBookmark;
        nodeIsSeparator;
        nodeIsURI;
        nodeIsQuery;
        nodeAncestors;
        validateItemProperties(name, validators, props, behavior);
        BOOKMARK_VALIDATORS;
        PAGEINFO_VALIDATORS;
        SYNC_BOOKMARK_VALIDATORS;
        SYNC_CHANGE_RECORD_VALIDATORS;
        QueryInterface;
        _shutdownFunctions;
        registerShutdownFunction;
        observe;
        nodeIsHost;
        nodeIsDay;
        nodeIsTagQuery;
        containerTypes;
        nodeIsContainer;
        nodeIsHistoryContainer;
        getConcreteItemGuid(aNode);
        getReversedHost(url);
        wrapNode(aNode, aType);
        unwrapNodes;
        validatePageInfo(pageInfo, validateVisits);
        normalizeToURLOrGUID(key);
        getFolderContents(aFolderGuid, aExcludeItems, aExpandQueries);
        get tagsFolderId(): any;
        isRootItem(guid);
        getContainerNodeWithOptions;
        hasChildURIs;
        getURLsForContainerNode;
        promiseDBConnection;
        promiseLargeCacheDBConnection;
        get largeCacheDBConnDeferred(): any;
        promiseUnsafeWritableDBConnection;
        withConnectionWrapper(name, task);
        promiseFaviconData(aPageUrl, preferredWidth);
        urlWithSizeRef(window, href, size);
        promiseBookmarksTree(aItemGuid, aOptions);
        chunkArray(array, chunkLength);
        sqlBindPlaceholders(info, prefix, suffix);
        md5(data);
        maybeInsertPlace(db, url);
        maybeInsertManyPlaces(db, urls);
        get isInAutomation(): any;
        getLogger();
    };
}