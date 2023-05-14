declare module "resource://gre/modules/PictureInPicture.sys.mjs" {
    export class PictureInPictureLauncherParent {
        receiveMessage();
    }
    export class PictureInPictureToggleParent {
        receiveMessage();
    }
    export class PictureInPictureParent {
        receiveMessage();
    }
    var PictureInPicture: {
        weakPipToWin;
        weakWinToBrowser;
        browserWeakMap;
        originatingWinWeakMap;
        weakGlobalToEligiblePipCount;
        getWeakPipPlayer(pipActorRef);
        handleEvent(event);
        addPiPBrowserToWeakMap(browser);
        addOriginatingWinToWeakMap(browser);
        removePiPBrowserFromWeakMap(browser);
        removeOriginatingWinFromWeakMap(browser);
        onPipSwappedBrowsers(event);
        updatePlayingDurationHistograms();
        onCommand(event);
        focusTabAndClosePip(window, pipActor);
        updateEligiblePipVideoCount(browsingContext, count);
        windowGlobalPipCountGenerator(browser);
        getEligiblePipVideoCount(browser);
        updateUrlbarHoverText(document, pipToggle, dataL10nId);
        updateUrlbarToggle(browser);
        toggleUrlbar(event);
        setUrlbarPipIconActive(win);
        setUrlbarPipIconInactive(pipWin);
        clearPipTabIcon(window);
        closePipWindow(pipWin);
        closeSinglePipWindow(closeData);
        handlePictureInPictureRequest(wgp, videoData);
        setOriginatingWindowActive(browsingContext, isActive);
        unload(window);
        openPipWindow(parentWin, videoData);
        fitToScreen(requestingWin, videoData);
        resolveOverlapConflicts(left, top, width, height);
        resizePictureInPictureWindow(videoData, actorRef);
        openToggleContextMenu(window, data);
        hideToggle();
        isOriginatingBrowser(browser);
        moveToggle();
        getAvailScreenSize(screen);
        getWorkingScreen(left, top);
        savePosition(win);
        loadPosition();
        setFirstSeen(dateSeconds);
        setHasUsed(hasUsed);
    };
}