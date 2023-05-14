declare module "resource://gre/modules/UpdateListener.sys.mjs" {
    var UpdateListener: {
        timeouts;
        restartDoorhangerShown;
        updateFirstReadyTime;
        promptDelayMsFromBuild;
        promptDelayMsFromUpdate;
        promptMaxFutureVariation;
        latestUpdate;
        availablePromptScheduled;
        get badgeWaitTime(): any;
        get suppressedPromptDelay(): any;
        maybeShowUnsupportedNotification();
        reset();
        clearPendingAndActiveNotifications();
        clearCallbacks();
        addTimeout(time, callback);
        requestRestart();
        openManualUpdateUrl(win);
        openUnsupportedUpdateUrl(win, detailsURL);
        showUpdateNotification(type, mainActionDismiss, dismissed, mainAction, beforeShowDoorhanger);
        showRestartNotification(update, dismissed);
        showUpdateAvailableNotification(update, dismissed);
        showManualUpdateNotification(update, dismissed);
        showUnsupportedUpdateNotification(update, dismissed);
        showUpdateDownloadingNotification();
        scheduleUpdateAvailableNotification(update);
        handleUpdateError(update, status);
        handleUpdateStagedOrDownloaded(update, status);
        handleUpdateAvailable(update, status);
        handleUpdateDownloading(status);
        handleUpdateSwap();
        observe(subject, topic, status);
    };
}