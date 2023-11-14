declare module "resource://gre/modules/FirstStartup.sys.mjs" {
    export var FirstStartup: {
        NOT_STARTED: number;
        IN_PROGRESS: number;
        TIMED_OUT: number;
        SUCCESS: number;
        UNSUPPORTED: number;
        _state: number;
        init();
        get state(): any;
    };
}