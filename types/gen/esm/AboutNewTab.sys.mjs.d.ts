declare module "resource://app/modules/AboutNewTab.sys.mjs" {
    var AboutNewTab: {
        QueryInterface;
        initialized;
        willNotifyUser;
        _activityStreamEnabled;
        activityStream;
        activityStreamDebug;
        _cachedTopSites;
        _newTabURL;
        _newTabURLOverridden;
        init();
        toggleActivityStream(stateEnabled, forceState);
        get newTabURL(): any;
        set newTabURL(aNewTabURL);
        get newTabURLOverridden(): any;
        get activityStreamEnabled(): any;
        resetNewTabURL();
        notifyChange();
        onBrowserReady();
        _subscribeToActivityStream();
        uninit();
        getTopSites();
        _alreadyRecordedTopsitesPainted;
        _nonDefaultStartup;
        noteNonDefaultStartup();
        maybeRecordTopsitesPainted(timestamp);
        observe(subject, topic, data);
    };
}