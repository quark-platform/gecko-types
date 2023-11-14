declare module "resource://app/modules/UrlbarProviderOpenTabs.sys.mjs" {
    import type { UrlbarProvider } from "resource://app/modules/UrlbarUtils.sys.mjs";
    export class UrlbarProviderOpenTabs extends UrlbarProvider {
        constructor();
        get name();
        get type();
        isActive(queryContext?);
        getOpenTabs(userContextId?, isInPrivateWindow?);
        getUserContextIdForOpenPagesTable(userContextId?, isInPrivateWindow?);
        registerOpenTab(url?, userContextId?, isInPrivateWindow?);
        unregisterOpenTab(url?, userContextId?, isInPrivateWindow?);
        startQuery(queryContext?, addCallback?);
    }
}