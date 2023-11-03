declare module "resource://gre/modules/SafeBrowsing.sys.mjs" {
    var SafeBrowsing: {
        init();
        registerTableWithURLs(listname?);
        registerTables();
        unregisterTables(obsoleteLists?);
        initialized;
        features;
        updateURL;
        gethashURL;
        reportURL;
        getReportURL(kind?, info?);
        observe(aSubject?, aTopic?, aData?);
        readPrefs();
        updateProviderURLs();
        controlUpdateChecking();
    };
}