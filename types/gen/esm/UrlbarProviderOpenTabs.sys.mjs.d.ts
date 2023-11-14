declare module "resource://app/modules/UrlbarProviderOpenTabs.sys.mjs" {
    import type { UrlbarProvider } from "resource://app/modules/UrlbarUtils.sys.mjs";
    export class UrlbarProviderOpenTabs extends UrlbarProvider {
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