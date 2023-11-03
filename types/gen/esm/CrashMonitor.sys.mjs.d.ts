declare module "resource://gre/modules/CrashMonitor.sys.mjs" {
    var CrashMonitor: {
        get previousCheckpoints(): any;
        init();
        observe(aSubject?, aTopic?, aData?);
        writeCheckpoint(aCheckpoint?);
    };
}