declare module "resource://app/modules/sessionstore/StartupPerformance.sys.mjs" {
    var StartupPerformance: {
        RESTORED_TOPIC;
        _startTimeStamp;
        _latestRestoredTimeStamp;
        _promiseFinished;
        _resolveFinished;
        _deadlineTimer;
        _hasFired;
        _isRestored;
        _totalNumberOfEagerTabs: number;
        _totalNumberOfTabs: number;
        _totalNumberOfWindows: number;
        init();
        get latestRestoredTimeStamp(): any;
        get isRestored(): any;
        _onRestorationStarts(isAutoRestore?);
        _startTimer();
        observe(subject?, topic?, details?);
    };
}