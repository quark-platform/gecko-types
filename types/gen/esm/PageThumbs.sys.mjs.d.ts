declare module "resource://gre/modules/PageThumbs.sys.mjs" {
    export var PageThumbs: {
        _initialized;
        _thumbnailWidth: number;
        _thumbnailHeight: number;
        get scheme(): any;
        get staticHost(): any;
        get contentType(): any;
        init;
        handlePlacesEvents(events?);
        uninit;
        getThumbnailURL;
        getThumbnailPath;
        captureToBlob;
        captureToCanvas(aBrowser?, aCanvas?, aArgs?, aSkipTelemetry?);
        shouldStoreThumbnail(aBrowser?);
        _captureToCanvas(aBrowser?, aCanvas?, aArgs?);
        _captureRemoteThumbnail(aBrowser?, aWidth?, aHeight?, aArgs?);
        captureAndStore;
        captureAndStoreIfStale;
        _store;
        addExpirationFilter;
        removeExpirationFilter;
        createCanvas;
        _prefEnabled;
    };
    export var PageThumbsStorage: {
        ensurePath;
        _revisionTable: {};
        updateRevision(aURL?);
        _revisionRange: number;
        getRevision(aURL?);
        writeData;
        copy;
        remove;
        wipe;
        fileExistsForURL;
        isFileRecentForURL;
        _eatNoOverwriteError;
    };
    export var PageThumbsExpiration: {
        _filters;
        init;
        addFilter;
        removeFilter;
        notify;
        expireThumbnails;
    };
}