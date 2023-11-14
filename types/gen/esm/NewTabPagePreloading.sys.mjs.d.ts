declare module "resource://app/modules/NewTabPagePreloading.sys.mjs" {
    export var NewTabPagePreloading: {
        MAX_COUNT: number;
        browserCounts: {
            normal: number;
            private: number;
        };
        get enabled(): any;
        _createBrowser(win?);
        _adoptBrowserFromOtherWindow(window?);
        maybeCreatePreloadedBrowser(window?);
        getPreloadedBrowser(window?);
        removePreloadedBrowser(window?);
    };
}