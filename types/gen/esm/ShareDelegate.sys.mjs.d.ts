declare module "resource://gre/modules/ShareDelegate.sys.mjs" {
    export class ShareDelegate {
        init(aParent?);
        get openerWindow();
        share(aTitle?, aText?, aUri?);
    }
}