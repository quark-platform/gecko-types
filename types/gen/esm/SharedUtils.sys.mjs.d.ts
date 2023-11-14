declare module "resource://gre/modules/services-settings/SharedUtils.sys.mjs" {
    export var SharedUtils: {
        checkContentHash(buffer?, size?, hash?);
        loadJSONDump(bucket?, collection?);
    };
}