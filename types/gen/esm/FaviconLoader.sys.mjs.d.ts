declare module "resource://app/modules/FaviconLoader.sys.mjs" {
    export class FaviconLoader {
        constructor(actor);
        loadIcons();
        addIconFromLink();
        addDefaultIcon();
        onPageShow();
        onPageHide();
    }
}