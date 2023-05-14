declare module "resource://app/modules/sessionstore/RecentlyClosedTabsAndWindowsMenuUtils.sys.mjs" {
    var RecentlyClosedTabsAndWindowsMenuUtils: {
        getTabsFragment(aWindow, aTagName, aPrefixRestoreAll, aRestoreAllLabel);
        getWindowsFragment(aWindow, aTagName, aPrefixRestoreAll, aRestoreAllLabel);
        _undoCloseMiddleClick(aEvent);
        get strings(): any;
    };
}