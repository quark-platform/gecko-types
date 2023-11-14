declare module "resource://app/modules/WindowsPreviewPerTab.sys.mjs" {
    export var AeroPeek: {
        available;
        __prefenabled;
        _enabled;
        initialized;
        previews;
        windows;
        taskbar;
        maxpreviews: number;
        cacheLifespan: number;
        initialize();
        destroy;
        get enabled(): any;
        set enabled(enable);
        get _prefenabled(): any;
        set _prefenabled(enable);
        _observersAdded;
        enable();
        disable();
        addPreview(preview?);
        removePreview(preview?);
        checkPreviewCount();
        onOpenWindow(win?);
        onCloseWindow(win?);
        resetCacheTimer();
        observe(aSubject?, aTopic?, aData?);
        handlePlacesEvents(events?);
        QueryInterface;
    };
}