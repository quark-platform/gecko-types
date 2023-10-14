declare module "resource://app/modules/ProcessHangMonitor.sys.mjs" {
    var ProcessHangMonitor: {
        get WAIT_EXPIRATION_TIME(): any;
        _shuttingDown;
        _activeReports;
        _pausedReports;
        init();
        terminateScript(win);
        debugScript(win);
        stopIt(win);
        stopHang(report, endReason, backupInfo);
        waitLonger(win);
        handleUserInput(win, func);
        observe(subject, topic, data);
        onQuitApplicationGranted();
        onWindowClosed(win);
        stopAllHangs(endReason);
        findActiveReport(browser);
        findPausedReport(browser);
        _recordTelemetryForReport(report, endReason, backupInfo);
        removeActiveReport(report);
        removePausedReport(report);
        updateWindows();
        updateWindow(win);
        showNotification(win, report);
        hideNotification(win);
        trackWindow(win);
        untrackWindow(win);
        handleEvent(event);
        reportHang(report);
        clearHang(report);
    };
}