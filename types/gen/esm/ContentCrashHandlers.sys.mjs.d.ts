declare module "resource://app/modules/ContentCrashHandlers.sys.mjs" {
    var TabCrashHandler: {
        _crashedTabCount: number;
        childMap;
        browserMap;
        notificationsMap;
        unseenCrashedChildIDs;
        pendingSubFrameCrashes;
        pendingSubFrameCrashesIDs;
        crashedBrowserQueues;
        restartRequiredBrowsers;
        testBuildIDMismatch;
        get prefs(): any;
        init();
        observe(aSubject, aTopic, aData);
        flushCrashedBrowserQueue(childID);
        onSelectedBrowserCrash(browser, restartRequired);
        onBackgroundBrowserCrash(browser, restartRequired);
        onSubFrameCrash(browser, childID);
        getAndRemoveSubframeCrash(childID);
        showSubFrameNotification(browser, childID, dumpID);
        willShowCrashedTab(browser);
        sendToRestartRequiredPage(browser);
        sendToTabCrashedPage(browser);
        maybeSendCrashReport(browser, message);
        removeSubmitCheckboxesForSameCrash(childID);
        onAboutTabCrashedLoad(browser);
        onAboutTabCrashedUnload(browser);
        getDumpID(browser);
        get queuedCrashedBrowsers(): any;
    };
    var UnsubmittedCrashHandler: {
        get prefs(): any;
        get enabled(): any;
        showingNotification;
        suppressed;
        _checkTimeout;
        init();
        uninit();
        observe(subject, topic, data);
        scheduleCheckForUnsubmittedCrashReports();
        checkForUnsubmittedCrashReports();
        shouldShowPendingSubmissionsNotification();
        showPendingSubmissionsNotification(reportIDs);
        dateString(someDate);
        show(param0);
        get autoSubmit(): any;
        set autoSubmit(val);
        submitReports(reportIDs, submittedFrom);
    };
}