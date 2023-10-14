declare module "resource://gre/modules/ExtensionBrowsingData.sys.mjs" {
    export class BrowsingDataDelegate {
        constructor(extension);
        sendRequestForResult();
        settings();
        sendClear();
        handleRemoval();
    }
}