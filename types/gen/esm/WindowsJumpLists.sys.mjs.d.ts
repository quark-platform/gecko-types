declare module "resource://app/modules/WindowsJumpLists.sys.mjs" {
    export var WinTaskbarJumpList: {
        _builder;
        _pbBuilder;
        _builtPb;
        _shuttingDown;
        startup;
        update;
        _shutdown;
        _refreshPrefs;
        _initTaskbar;
        _initObs;
        _freeObs;
        _updateTimer;
        _hasIdleObserver;
        _updateIdleObserver;
        _free;
        QueryInterface;
        name;
        notify;
        observe;
    };
}