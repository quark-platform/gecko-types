declare module "resource://app/modules/ScreenshotsUtils.sys.mjs" {
    export class ScreenshotsComponentParent {
        receiveMessage();
        didDestroy();
    }
    var ScreenshotsUtils: {
        initialized;
        initialize();
        uninitialize();
        handleEvent(event?);
        observe(subj?, topic?, data?);
        notify(window?, type?);
        getActor(browser?);
        panelForBrowser(browser?);
        openPanel(browser?);
        closePanel(browser?, closeOverlay?);
        togglePanelAndOverlay(browser?, data?);
        getDialog(browser?);
        closeDialogBox(browser?);
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