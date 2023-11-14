declare module "resource://gre/modules/CrashReports.sys.mjs" {
    export var CrashReports: {
        pendingDir;
        reportsDir;
        submittedDir;
        getReports;
    };
}