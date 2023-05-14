declare module "resource://gre/modules/BackgroundUpdate.sys.mjs" {
    var BackgroundUpdate: {
        _initialized;
        get taskId(): any;
        _hasOmnijar();
        _force();
        _reasonsToNotUpdateInstallation();
        _reasonsToNotScheduleUpdates();
        _registerBackgroundUpdateTask();
        ensureExperimentToRolloutTransitionPerformed();
        observe(subject, topic, data);
        maybeScheduleBackgroundUpdateTask();
        recordUpdateEnvironment();
        scheduleFirefoxMessagingSystemTargetingSnapshotting();
        readFirefoxMessagingSystemTargetingSnapshot();
        _recordGleanMetrics(reasons);
    };
}