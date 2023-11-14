declare module "resource://app/modules/ScreenshotsUtils.sys.mjs" {
    export class ScreenshotsComponentParent extends JSWindowActorParent {
        receiveMessage();
        didDestroy();
    }
    var UIPhases: {
        CLOSED: number;
        INITIAL: number;
        OVERLAYSELECTION: number;
        PREVIEW: number;
    };
    var ScreenshotsUtils: {
        browserToScreenshotsState;
        initialized;
        getUIPhase(browser?);
        initialize();
        uninitialize();
        handleEvent(event?);
        observe(subj?, topic?, data?);
        notify(window?, type?);
        getActor(browser?);
        start(browser?, reason?);
        exit(browser?);
        cancel(browser?, reason?);
        setPerBrowserState(browser?, nameValues?);
        scheduleRetry(browser?, reason?);
        openPreviewDialog(browser?);
        panelForBrowser(browser?);
        createPanelForBrowser(browser?);
        openPanel(browser?);
        closePanel(browser?);
        showPanelAndOverlay(browser?, data?);
        closeOverlay(browser?);
        getDialog(browser?);
        closeDialogBox(browser?);
        onDialogClose(browser?);
        getWidgetAnchor(browser?);
        showCopiedConfirmationHint(browser?);
        fetchFullPageBounds(browser?);
        fetchVisibleBounds(browser?);
        showAlertMessage(title?, message?);
        cropScreenshotRectIfNeeded(rect?);
        doScreenshot(browser?, dialog?, type?);
        takeScreenshot(browser?, dialog?, rect?);
        createCanvas(region?, browser?);
        copyScreenshotFromRegion(region?, browser?);
        copyScreenshot(dataUrl?, browser?);
        downloadScreenshotFromRegion(title?, region?, browser?);
        downloadScreenshot(title?, dataUrl?, browser?);
        recordTelemetryEvent(type?, object?, args?);
    };
}