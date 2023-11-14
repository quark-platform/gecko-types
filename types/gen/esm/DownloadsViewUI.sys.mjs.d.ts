declare module "resource://app/modules/DownloadsViewUI.sys.mjs" {
    export var DownloadsViewUI: {
        isCommandName(name?);
        getStrippedUrl(download?);
        getDisplayName(download?);
        getSizeWithUnits(download?);
        updateContextMenuForElement(contextMenu?, element?);
    };
}