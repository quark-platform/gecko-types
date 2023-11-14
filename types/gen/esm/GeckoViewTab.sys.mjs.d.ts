declare module "resource://gre/modules/GeckoViewTab.sys.mjs" {
    var GeckoViewTabBridge: {
        windowIdToTabId(windowId?);
        tabIdToWindowId(tabId?);
        openOptionsPage(extensionId?);
        createNewTab();
        closeTab();
        updateTab();
    };
    import type { GeckoViewModule } from "resource://gre/modules/GeckoViewModule.sys.mjs";
    export class GeckoViewTab extends GeckoViewModule {
        onInit();
        onEvent();
    }
}