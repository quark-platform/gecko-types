declare module "resource://gre/modules/ChildCrashHandler.sys.mjs" {
    export var ChildCrashHandler: {
        childMap;
        observe(aSubject?, aTopic?, aData?);
    };
}