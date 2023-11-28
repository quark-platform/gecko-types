declare module "resource://gre/modules/ChildCrashHandler.sys.mjs" {export namespace ChildCrashHandler {
    let childMap: Map<any, any>;
    function observe(aSubject: any, aTopic: any, aData: any): void;
}
}