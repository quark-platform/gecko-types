declare module "resource://gre/modules/PromiseUtils.sys.mjs" {
    export var PromiseUtils: {
        defer();
        idleDispatch(callback?, timeout?);
    };
}