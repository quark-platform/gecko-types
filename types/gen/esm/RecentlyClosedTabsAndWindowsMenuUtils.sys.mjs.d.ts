declare module "resource://app/modules/sessionstore/RecentlyClosedTabsAndWindowsMenuUtils.sys.mjs" {
    var RecentlyClosedTabsAndWindowsMenuUtils: {
        getTabsFragment(aWindow, aTagName);
        getWindowsFragment(aWindow, aTagName);
        _undoCloseMiddleClick(aEvent);
        get strings(): any;
    };
}