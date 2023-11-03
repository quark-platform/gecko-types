declare module "resource://gre/modules/PromiseUtils.sys.mjs" {
    var PromiseUtils: {
        defer();
        idleDispatch(callback?, timeout?);
    };
}