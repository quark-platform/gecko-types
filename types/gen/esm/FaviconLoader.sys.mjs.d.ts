declare module "resource://app/modules/FaviconLoader.sys.mjs" {
    export class FaviconLoader {
        constructor(actor);
        loadIcons();
        addIconFromLink(aLink?, aIsRichIcon?);
        addDefaultIcon(pageUri?);
        onPageShow();
        onPageHide();
    }
}