declare module "resource://app/modules/TabUnloader.sys.mjs" {
    export var TabUnloader: {
        init();
        isDiscardable(tab?);
        unloadTabAsync(minInactiveDuration?);
        getSortedTabs(minInactiveDuration?, tabMethods?);
        unloadLeastRecentlyUsedTab(minInactiveDuration?);
        QueryInterface;
    };
}