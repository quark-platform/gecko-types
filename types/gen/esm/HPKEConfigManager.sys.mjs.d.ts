declare module "resource://gre/modules/HPKEConfigManager.sys.mjs" {export class HPKEConfigManager {
    static get(aURL: any, aOptions?: {}): Promise<Uint8Array>;
    static "__#847764@#getInternal"(aURL: any, aOptions?: {}): Promise<any>;
    static fetchAndStore(aURL: any, aOptions?: {}): Promise<ArrayBuffer>;
}
}