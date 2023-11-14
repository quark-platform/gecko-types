declare module "resource://app/modules/HomePage.sys.mjs" {
    export var HomePage: {
        _ignoreList;
        _initializationPromise;
        delayedStartup();
        get(aWindow?);
        getDefault();
        getOriginalDefault();
        get overridden(): any;
        get locked(): any;
        get isDefault(): any;
        set(value?);
        safeSet(value?);
        clear();
        reset();
        shouldIgnore(url?);
        _handleIgnoreListUpdated(param0?);
        onWidgetRemoved(widgetId?, area?);
        _maybeAddHomeButtonToToolbar(homePage?);
        _addCustomizableUiListener();
    };
}