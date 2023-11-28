declare module "resource://gre/modules/ExtensionBrowsingData.sys.mjs" {export class BrowsingDataDelegate {
    constructor(extension: any);
    extension: any;
    sendRequestForResult(type: any, data: any): Promise<any>;
    settings(): Promise<any>;
    sendClear(dataType: any, options: any): Promise<any>;
    handleRemoval(dataType: any, options: any): Promise<any>;
}
}