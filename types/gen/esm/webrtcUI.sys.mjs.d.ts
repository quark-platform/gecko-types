declare module "resource://app/modules/webrtcUI.sys.mjs" {
    export var webrtcUI: {
        initialized;
        peerConnectionBlockers;
        emitter;
        init();
        uninit();
        observe(subject?, topic?, data?);
        SHARING_NONE: number;
        SHARING_WINDOW: number;
        SHARING_SCREEN: number;
        sharedBrowserWindows;
        sharingScreen;
        allowedSharedBrowsers;
        allowTabSwitchesForSession;
        tabSwitchCountForSession: number;
        sharingDisplay;
        sharingDisplaySessionId: number;
        perTabIndicators;
        activePerms;
        get showGlobalIndicator(): any;
        get showCameraIndicator(): any;
        get showMicrophoneIndicator(): any;
        get showScreenSharingIndicator(): any;
        _streams;
        getActiveStreams(aCamera?, aMicrophone?, aScreen?, aWindow?);
        browserHasStreams(aBrowser?);
        getCombinedStateForBrowser(aTopBrowsingContext?);
        streamAddedOrRemoved(aBrowsingContext?, aData?);
        forgetStreamsFromBrowserContext(aBrowsingContext?);
        stopSharingStreams(activeStreams?, stopCameras?, stopMics?, stopScreens?, stopWindows?);
        clearPermissionsAndStopSharing(types?, tab?);
        updateIndicators(aTopBrowsingContext?);
        swapBrowserForNotification(aOldBrowser?, aNewBrowser?);
        forgetActivePermissionsFromBrowser(aBrowser?);
        showSharingDoorhanger(aActiveStream?, aEvent?);
        updateWarningLabel(aMenuList?);
        addPeerConnectionBlocker(aCallback?);
        removePeerConnectionBlocker(aCallback?);
        on();
        off();
        getHostOrExtensionName(uri?, href?);
        updateGlobalIndicator();
        getWindowShareState(window?);
        tabAddedWhileSharing(tab?);
        shouldShowSharedTabWarning(tab?);
        allowSharedTabSwitch(tab?, allowForSession?);
        recordEvent(type?, object?, args?);
        _setSharedData();
    };
    export function showStreamSharingMenu(win?, event?, inclWindow?);
    export class MacOSWebRTCStatusbarIndicator {
        constructor();
        updateIndicatorState();
        close();
        handleEvent(event?);
        _command(aEvent?);
        _popupShowing(aEvent?);
        _popupHiding(aEvent?);
        _setIndicatorState(aName?, aState?);
    }
}