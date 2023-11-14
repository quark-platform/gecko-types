declare module "resource://gre/modules/PageThumbUtils.sys.mjs" {
    export var PageThumbUtils: {
        THUMBNAIL_DEFAULT_SIZE: number;
        THUMBNAIL_BG_COLOR;
        HTML_NAMESPACE;
        createCanvas(aWindow?, aWidth?, aHeight?);
        getThumbnailSize(aWindow?);
        getContentSize(aWindow?);
        createImageThumbnailCanvas(window?, url?, targetWidth?, backgroundColor?);
        createSnapshotThumbnail(aBrowser?, aDestCanvas?, aArgs?);
        determineCropSize(aWindow?, aCanvas?);
        shouldStoreContentThumbnail(aDocument?, aDocShell?);
        isChannelErrorResponse(channel?);
    };
}