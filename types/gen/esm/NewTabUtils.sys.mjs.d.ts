declare module "resource://gre/modules/NewTabUtils.sys.mjs" {
    export var NewTabUtils: {
        _initialized;
        extractSite;
        init;
        initWithoutProviders;
        uninit;
        getProviderLinks(aProvider?);
        isTopSiteGivenProvider(aSite?, aProvider?);
        isTopPlacesSite(aSite?);
        restore;
        undoAll;
        links;
        allPages;
        pinnedLinks;
        blockedLinks;
        activityStreamLinks;
        activityStreamProvider;
    };
}