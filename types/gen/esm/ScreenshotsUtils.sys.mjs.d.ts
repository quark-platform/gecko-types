declare module "resource://app/modules/ScreenshotsUtils.sys.mjs" {
    export class ScreenshotsComponentParent {
        receiveMessage();
        didDestroy();
    }
    var ScreenshotsUtils: {
        initialized;
        initialize();
        uninitialize();
        handleEvent(event);
        observe(subj, topic, data);
        notify(window, type);
        getActor(browser);
        openPanel(browser);
        closePanel(browser);
        togglePanelAndOverlay(browser, data);
        getDialog(browser);
        closeDialogBox(browser);
        panelForBrowser(browser);
        createOrDisplayButtons(browser);
        fetchFullPageBounds(browser);
        fetchVisibleBounds(browser);
        showAlertMessage(title, message);
        cropScreenshotRectIfNeeded(rect);
        doScreenshot(browser, dialog, type);
        takeScreenshot(browser, dialog, rect);
        createCanvas(box, browser);
        copyScreenshotFromRegion(region, browser);
        copyScreenshot(dataUrl);
        downloadScreenshotFromRegion(title, box, browser);
        downloadScreenshot(title, dataUrl, browser);
        recordTelemetryEvent(type, object, args);
    };
}