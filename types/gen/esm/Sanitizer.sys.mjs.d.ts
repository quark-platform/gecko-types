declare module "resource://app/modules/Sanitizer.sys.mjs" {
    var Sanitizer: {
        PREF_SANITIZE_ON_SHUTDOWN;
        PREF_PENDING_SANITIZATIONS;
        PREF_CPD_BRANCH;
        PREF_SHUTDOWN_BRANCH;
        PREF_TIMESPAN;
        PREF_NEWTAB_SEGREGATION;
        TIMESPAN_EVERYTHING: number;
        TIMESPAN_HOUR: number;
        TIMESPAN_2HOURS: number;
        TIMESPAN_4HOURS: number;
        TIMESPAN_TODAY: number;
        TIMESPAN_5MIN: number;
        TIMESPAN_24HOURS: number;
        shouldSanitizeOnShutdown;
        shouldSanitizeNewTabContainer;
        showUI(parentWindow);
        onStartup();
        getClearRange(ts);
        sanitize();
        observe(subject, topic, data);
        QueryInterface;
        runSanitizeOnShutdown();
        items: {
            cache: {
                clear(range);
            };
            cookies: {
                clear(range, clearHonoringExceptions);
            };
            offlineApps: {
                clear(range, clearHonoringExceptions);
            };
            history: {
                clear(range);
            };
            formdata: {
                clear(range);
            };
            downloads: {
                clear(range);
            };
            sessions: {
                clear(range);
            };
            siteSettings: {
                clear(range);
            };
            openWindows: {
                _canCloseWindow(win);
                _resetAllWindowClosures(windowList);
                clear(range);
            };
            pluginData: {
                clear(range);
            };
        };
    };
}