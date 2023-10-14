declare module "resource://gre/modules/BackgroundPageThumbs.sys.mjs" {
    var BackgroundPageThumbs: {
        capture(url, options);
        captureIfMissing(url, options);
        renewThumbnailBrowser();
        get useFissionBrowser(): any;
        _ensureParentWindowReady();
        _init();
        observe(subject, topic, data);
        _destroy();
        QueryInterface;
        onStateChange(wbp, request, stateFlags, status);
        _ensureBrowser();
        _destroyBrowser();
        _loadAboutBlank();
        _processCaptureQueue();
        _onCaptureOrTimeout(capture, reason);
        _destroyBrowserTimeout;
    };
}