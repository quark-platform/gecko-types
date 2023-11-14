declare module "resource://gre/modules/ChildCrashHandler.sys.mjs" {
    var ChildCrashHandler: {
        childMap;
        observe(aSubject?, aTopic?, aData?);
    };
}