declare module "resource://gre/modules/BackgroundTasksUtils.sys.mjs" {
    var BackgroundTasksUtils: {
        _defaultProfileInitialized;
        _defaultProfile;
        getDefaultProfile();
        hasDefaultProfile();
        currentProfileIsDefaultProfile();
        _throwIfNotLocked(lock);
        withProfileLock(callback);
        readPreferences();
        readFirefoxMessagingSystemTargetingSnapshot();
        readTelemetryClientID();
        enableNimbus(commandLine);
        enableFirefoxMessagingSystem();
    };
}