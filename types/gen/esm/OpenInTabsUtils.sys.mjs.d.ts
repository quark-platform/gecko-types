declare module "resource://app/modules/OpenInTabsUtils.sys.mjs" {
    export var OpenInTabsUtils: {
        confirmOpenInTabs(numTabsToOpen?, aWindow?);
        promiseConfirmOpenInTabs(numTabsToOpen?, aWindow?);
    };
}