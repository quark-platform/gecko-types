declare module "resource://gre/modules/BackgroundTasksUtils.sys.mjs" {
    export var BackgroundTasksUtils: {
        _defaultProfileInitialized;
        _defaultProfile;
        getDefaultProfile();
        hasDefaultProfile();
        currentProfileIsDefaultProfile();
        _throwIfNotLocked(lock?);
        withProfileLock(callback?, profile?);
        readPreferences(predicate?, lock?);
        readFirefoxMessagingSystemTargetingSnapshot(lock?);
        readTelemetryClientID(lock?);
        enableNimbus(commandLine?, defaultProfile?);
        enableFirefoxMessagingSystem(defaultProfile?);
    };
}