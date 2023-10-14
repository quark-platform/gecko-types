declare module "resource://gre/modules/ShareDelegate.sys.mjs" {
    export class ShareDelegate {
        init();
        get openerWindow();
        share();
    }
}