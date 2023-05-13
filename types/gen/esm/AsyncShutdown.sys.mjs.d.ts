declare module "resource://gre/modules/AsyncShutdown.sys.mjs" {
    var AsyncShutdown: {
        get _getPhase(): any;
        get DELAY_CRASH_MS(): any;
    };
}