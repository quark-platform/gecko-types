declare module "resource://app/modules/SearchUIUtils.sys.mjs" {
    export var SearchUIUtils: {
        initialized;
        init();
        observe(engine?, topic?, data?);
        addOpenSearchEngine(locationURL?, image?, browsingContext?);
        get searchEnginesURL(): any;
        updatePlaceholderNamePreference(engine?, isPrivate?);
    };
}