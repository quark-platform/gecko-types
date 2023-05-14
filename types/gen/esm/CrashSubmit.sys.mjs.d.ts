declare module "resource://gre/modules/CrashSubmit.sys.mjs" {
    var CrashSubmit: {
        SUBMITTED_FROM_AUTO;
        SUBMITTED_FROM_INFOBAR;
        SUBMITTED_FROM_ABOUT_CRASHES;
        SUBMITTED_FROM_CRASH_TAB;
        submit;
        delete;
        ignore;
        pendingIDs;
        pruneSavedDumps;
        _activeSubmissions;
    };
}