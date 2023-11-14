declare module "resource://gre/modules/ExtensionBrowsingData.sys.mjs" {
    export class BrowsingDataDelegate {
        constructor(extension);
        sendRequestForResult(type?, data?);
        settings();
        sendClear(dataType?, options?);
        handleRemoval(dataType?, options?);
    }
}