declare module "resource://gre/modules/GeckoViewTab.sys.mjs" {
    var GeckoViewTabBridge: {
        windowIdToTabId(windowId?);
        tabIdToWindowId(tabId?);
        openOptionsPage(extensionId?);
        createNewTab();
        closeTab();
        updateTab();
    };
    export class GeckoViewTab {
        onInit();
        onEvent();
    }
}