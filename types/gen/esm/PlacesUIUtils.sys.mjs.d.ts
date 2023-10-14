declare module "resource://app/modules/PlacesUIUtils.sys.mjs" {
    var PlacesUIUtils: {
        BookmarkState;
        _bookmarkToolbarTelemetryListening;
        LAST_USED_FOLDERS_META_KEY;
        lastContextMenuTriggerNode;
        lastBookmarkDialogDeferred;
        obfuscateUrlForXulStore(url);
        showBookmarkDialog(aInfo, aParentWindow);
        showBookmarkPagesDialog(URIList, hiddenRows, win);
        loadFavicon(browser, principal, pageURI, uri, expiration, iconURI);
        getViewForNode;
        getControllerForCommand(win, command);
        updateCommands(win);
        doCommand(win, command);
        markPageAsTyped;
        markPageAsFollowedBookmark;
        markPageAsFollowedLink;
        setCharsetForPage(url, charset, window);
        checkURLSecurity;
        canUserRemove(aNode);
        isFolderReadOnly(placesNode);
        openTabset(aItemsToOpen, aEvent, aWindow);
        openMultipleLinksInTabs(nodeOrNodes, event, view);
        openNodeWithEvent;
        openNodeIn;
        _openNodeIn;
        guessUrlSchemeForUI(href);
        getBestTitle;
        shouldShowTabsFromOtherComputersMenuitem();
        isFolderShortcutQueryString(queryString);
        promiseNodeLikeFromFetchInfo(aFetchInfo);
        batchUpdatesForNode(resultNode, itemsBeingChanged, functionToWrap);
        handleTransferItems(items, insertionPoint, doCopy, view);
        onSidebarTreeClick(event);
        onSidebarTreeKeyPress(event);
        onSidebarTreeMouseMove(event);
        setMouseoverURL(url, win);
        NUM_TOOLBAR_BOOKMARKS_TO_UNHIDE: number;
        maybeToggleBookmarkToolbarVisibility(aForceVisible);
        managedPlacesContextShowing(event);
        placesContextShowing(event);
        placesContextHiding(event);
        createContainerTabMenu(event);
        openInContainerTab(event);
        openSelectionInTabs(event);
        managedBookmarksController: {
            triggerNode;
            openSelectionInTabs(event);
            isCommandEnabled(command);
            doCommand(command);
        };
        maybeAddImportButton();
        removeImportButtonWhenImportSucceeds();
        setupSpeculativeConnection(url, window);
        getImageURL(icon);
        insertTitleStartDiffs(candidates);
    };
}