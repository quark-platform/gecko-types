declare module "resource://app/modules/UrlbarProviderOpenTabs.sys.mjs" {
    export class UrlbarProviderOpenTabs {
        constructor();
        get name();
        get type();
        isActive();
        getOpenTabs();
        getUserContextIdForOpenPagesTable();
        registerOpenTab();
        unregisterOpenTab();
        startQuery();
    }
}