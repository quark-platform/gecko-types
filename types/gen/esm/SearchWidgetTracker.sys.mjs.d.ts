declare module "resource://app/modules/SearchWidgetTracker.sys.mjs" {
    var SearchWidgetTracker: {
        init();
        onWidgetAdded(widgetId, area);
        onWidgetRemoved(aWidgetId, aArea);
        onAreaNodeRegistered(aArea);
        onCustomizeEnd();
        syncPreferenceWithWidget();
        syncWidgetWithPreference();
        removePersistedWidths();
        get widgetIsInNavBar(): any;
    };
}