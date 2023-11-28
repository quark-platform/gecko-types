declare module "resource://gre/modules/DelayedInit.sys.mjs" {export namespace DelayedInit {
    function schedule(fn: any, object: any, name: any, maxWait: any): void;
    function scheduleList(fns: any, maxWait: any): void;
}
}