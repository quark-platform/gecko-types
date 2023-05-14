declare module "resource://gre/modules/CrashReports.sys.mjs" {
    var CrashReports: {
        pendingDir;
        reportsDir;
        submittedDir;
        getReports;
    };
}