declare module "resource://gre/modules/BackgroundUpdate.sys.mjs" {
    export var BackgroundUpdate: {
        QueryInterface;
        name;
        _initialized;
        get taskId(): any;
        _hasOmnijar();
        _force();
        _reasonsToNotUpdateInstallation();
        _reasonsToNotScheduleUpdates();
        _registerBackgroundUpdateTask(taskId?);
        ensureExperimentToRolloutTransitionPerformed();
        observe(subject?, topic?, data?);
        maybeScheduleBackgroundUpdateTask();
        recordUpdateEnvironment();
        scheduleFirefoxMessagingSystemTargetingSnapshotting();
        notify();
        _startTargetingSnapshottingTimer();
        readFirefoxMessagingSystemTargetingSnapshot(lock?);
        _recordGleanMetrics(reasons?);
    };
}