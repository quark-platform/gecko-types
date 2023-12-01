declare module "resource://gre/modules/ExtensionBrowsingData.sys.mjs" {export class BrowsingDataDelegate {
    constructor(extension: any);
    handleRemoval(dataType: any, options: any): any;
    settings(): Promise<{
        options: {
            since: number;
        };
        dataToRemove: {};
        dataRemovalPermitted: {};
    }>;
}
}