declare module "resource://app/modules/sessionstore/SessionStartup.sys.mjs" {
    var SessionStartup: {
        NO_SESSION;
        RECOVER_SESSION;
        RESUME_SESSION;
        DEFER_SESSION;
        _initialState;
        _sessionType;
        _initialized;
        _previousSessionCrashed;
        _resumeSessionEnabled;
        init();
        _createSupportsString(data?);
        _onSessionFileRead(param0?);
        observe(subject?, topic?, data?);
        get onceInitialized(): any;
        get state(): any;
        isAutomaticRestoreEnabled();
        willRestore();
        willRestoreAsCrashed();
        get willOverrideHomepage(): any;
        get sessionType(): any;
        get previousSessionCrashed(): any;
        resetForTest();
        QueryInterface;
    };
}