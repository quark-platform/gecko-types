declare module "resource://gre/modules/addons/AddonRepository.sys.mjs" {
    var AddonRepository: {
        get homepageURL(): any;
        getSearchURL(aSearchTerms);
        get cacheEnabled(): any;
        shutdown();
        metadataAge();
        isMetadataStale();
        getCachedAddonByID(aId, aCallback);
        _clearCache();
        _fetchPaged(pref, params, handler);
        getAddonsByIDs(aIDs);
        getMappedAddons(browserID, extensionIDs);
        _getFullData(aIDs);
        cacheAddons(aIds);
        backgroundUpdateCheck();
        _parseAddon(aEntry);
        _formatURLPref(aPreference, aSubstitutions);
        flush();
        getAvailableLangpacks();
    };
}