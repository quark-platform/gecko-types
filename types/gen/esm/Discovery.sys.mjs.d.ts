declare module "resource://app/modules/Discovery.sys.mjs" {
    var Discovery: {
        set enabled(val);
        get enabled(): any;
        reset();
        update();
    };
}