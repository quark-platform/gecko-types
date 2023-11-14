declare module "resource://gre/modules/kvstore.sys.mjs" {
    export class KeyValueService {
        getOrCreate(dir?, name?);
    }
}