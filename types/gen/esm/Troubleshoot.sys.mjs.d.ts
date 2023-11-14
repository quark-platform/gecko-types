declare module "resource://gre/modules/Troubleshoot.sys.mjs" {
    export var Troubleshoot: {
        snapshot();
        kMaxCrashAge;
    };
}