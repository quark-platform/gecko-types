declare module "resource://app/modules/Discovery.sys.mjs" {
    export var Discovery: {
        set enabled(val);
        get enabled(): any;
        reset();
        update();
    };
}