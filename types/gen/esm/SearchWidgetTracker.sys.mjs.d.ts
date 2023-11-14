declare module "resource://app/modules/SearchWidgetTracker.sys.mjs" {
    export var SearchWidgetTracker: {
        init();
        onWidgetAdded(widgetId?, area?);
        onWidgetRemoved(aWidgetId?, aArea?);
        onAreaNodeRegistered(aArea?);
        onCustomizeEnd();
        syncPreferenceWithWidget();
        syncWidgetWithPreference();
        removePersistedWidths();
        get widgetIsInNavBar(): any;
    };
}