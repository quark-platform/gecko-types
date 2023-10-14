declare module "resource://app/modules/SiteDataManager.sys.mjs" {
    var SiteDataManager: {
        _sites;
        _getCacheSizeObserver;
        _getCacheSizePromise;
        _getQuotaUsagePromise;
        _quotaUsageRequest;
        updateSites(entryUpdatedCallback);
        getBaseDomainFromHost(host);
        _getOrInsertSite(baseDomainOrHost);
        _getOrInsertContainersData(site, userContextId);
        getCacheSize();
        _getQuotaUsage(entryUpdatedCallback);
        _getAllCookies(entryUpdatedCallback);
        _cancelGetQuotaUsage();
        hasSiteData(asciiHost);
        getTotalUsage();
        getSites();
        getSite(baseDomainOrHost);
        _removePermission(site);
        _removeQuotaUsage(site);
        _removeCookies(site);
        _getDeletablePermissions();
        remove(domainsOrHosts);
        promptSiteDataRemoval(win, removals);
        removeAll();
        removeCache();
        removeSiteData();
    };
}