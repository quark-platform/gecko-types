declare module "resource://gre/modules/UpdateLog.sys.mjs" {
    var UpdateLog: {
        logPrefixedString;
        get enabled(): any;
        get logFileEnabled(): any;
        addConfigChangeListener(listener?);
    };
}