declare module "resource://app/modules/sessionstore/RecentlyClosedTabsAndWindowsMenuUtils.sys.mjs" {
    var RecentlyClosedTabsAndWindowsMenuUtils: {
        getTabsFragment(aWindow?, aTagName?, aPrefixRestoreAll?);
        getWindowsFragment(aWindow?, aTagName?, aPrefixRestoreAll?);
        onRestoreAllTabsCommand(aEvent?);
        onRestoreAllWindowsCommand(aEvent?);
        _undoCloseMiddleClick(aEvent?);
    };
}