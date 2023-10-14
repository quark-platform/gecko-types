declare module "resource://app/modules/OpenInTabsUtils.sys.mjs" {
    var OpenInTabsUtils: {
        confirmOpenInTabs(numTabsToOpen, aWindow);
        promiseConfirmOpenInTabs(numTabsToOpen, aWindow);
    };
}