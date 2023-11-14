declare module "resource://gre/modules/DelayedInit.sys.mjs" {
    export var DelayedInit: {
        schedule(fn?, object?, name?, maxWait?);
        scheduleList(fns?, maxWait?);
    };
}