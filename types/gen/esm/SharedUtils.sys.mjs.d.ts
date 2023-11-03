declare module "resource://gre/modules/services-settings/SharedUtils.sys.mjs" {
    var SharedUtils: {
        checkContentHash(buffer?, size?, hash?);
        loadJSONDump(bucket?, collection?);
    };
}