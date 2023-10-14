declare module "resource://app/modules/LaterRun.sys.mjs" {
    var LaterRun: {
        init();
        get enabled(): any;
        set enabled(val);
        get hoursSinceInstall(): any;
        get sessionCount(): any;
        set sessionCount(val);
        selfDestruct();
        readPages();
        getURL();
    };
}