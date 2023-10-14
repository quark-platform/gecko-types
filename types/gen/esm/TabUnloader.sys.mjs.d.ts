declare module "resource://app/modules/TabUnloader.sys.mjs" {
    var TabUnloader: {
        init();
        isDiscardable(tab);
        unloadTabAsync(minInactiveDuration);
        getSortedTabs(minInactiveDuration, tabMethods);
        unloadLeastRecentlyUsedTab(minInactiveDuration);
        QueryInterface;
    };
}