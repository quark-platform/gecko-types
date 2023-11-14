declare module "resource://gre/modules/CrashMonitor.sys.mjs" {
    export var CrashMonitor: {
        get previousCheckpoints(): any;
        init();
        observe(aSubject?, aTopic?, aData?);
        writeCheckpoint(aCheckpoint?);
    };
}