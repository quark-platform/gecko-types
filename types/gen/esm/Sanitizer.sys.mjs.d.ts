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
        sanitize(itemsToClear, options);
        observe(subject, topic, data);
        QueryInterface;
        runSanitizeOnShutdown();
        items: {
            cache: {
                clear(range);
            };
            cookies: {
                clear(range, param1, clearHonoringExceptions);
            };
            offlineApps: {
                clear(range, param1, clearHonoringExceptions);
            };
            history: {
                clear(range, param1);
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
                clear(range, param1);
            };
            pluginData: {
                clear(range);
            };
        };
    };
}