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
        getWeakPipPlayer(pipActorRef?);
        getPanelForBrowser(browser?);
        handleEvent(event?);
        addPiPBrowserToWeakMap(browser?);
        addOriginatingWinToWeakMap(browser?);
        removePiPBrowserFromWeakMap(browser?);
        removeOriginatingWinFromWeakMap(browser?);
        onPipSwappedBrowsers(event?);
        updatePlayingDurationHistograms();
        onCommand(event?);
        focusTabAndClosePip(window?, pipActor?);
        toggleRespectDisablePip(event?);
        updateEligiblePipVideoCount(browsingContext?, object?);
        windowGlobalPipCountGenerator(browser?);
        getEligiblePipVideoCount(browser?);
        updateUrlbarHoverText(document?, pipToggle?, dataL10nId?);
        updateUrlbarToggle(browser?);
        toggleUrlbar(event?);
        onPipPanelShown(event?);
        onPipPanelHidden(event?);
        togglePipPanel(browser?);
        setUrlbarPipIconActive(win?);
        setUrlbarPipIconInactive(win?);
        clearPipTabIcon(window?);
        closePipWindow(pipWin?);
        closeSinglePipWindow(closeData?);
        handlePictureInPictureRequest(wgp?, videoData?);
        setOriginatingWindowActive(browsingContext?, isActive?);
        unload(window?);
        openPipWindow(parentWin?, videoData?);
        fitToScreen(requestingWin?, videoData?);
        resolveOverlapConflicts(left?, top?, width?, height?);
        resizePictureInPictureWindow(videoData?, actorRef?);
        openToggleContextMenu(window?, data?);
        hideToggle();
        isOriginatingBrowser(browser?);
        moveToggle();
        getAvailScreenSize(screen?);
        getWorkingScreen(left?, top?, width?, height?);
        savePosition(win?);
        loadPosition();
        setFirstSeen(dateSeconds?);
        setHasUsed(hasUsed?);
    };
}