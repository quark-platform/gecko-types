declare module "resource://gre/modules/DelayedInit.sys.mjs" {
    var DelayedInit: {
        schedule(fn, object, name, maxWait);
        scheduleList(fns, maxWait);
    };
}