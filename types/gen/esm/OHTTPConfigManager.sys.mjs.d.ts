declare module "resource://gre/modules/OHTTPConfigManager.sys.mjs" {
    export class OHTTPConfigManager {
        get(aURL?);
        fetchAndStore(aURL?);
    }
}