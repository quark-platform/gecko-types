declare module "resource://app/modules/MacAttribution.sys.mjs" {export namespace MacAttribution {
    const applicationPath: any;
    function setAttributionString(aAttrStr: any, path?: any): Promise<any>;
    function getAttributionString(path?: any): Promise<any>;
    function delAttributionString(path?: any): Promise<any>;
}
}