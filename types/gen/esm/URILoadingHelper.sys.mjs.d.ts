declare module "resource://app/modules/URILoadingHelper.sys.mjs" {
    var URILoadingHelper: {
        openLinkIn(window, url, where, params);
        getTargetWindow(window);
        openUILink(window, url, event, aIgnoreButton, aIgnoreAlt, aAllowThirdPartyFixup, aPostData, aReferrerInfo);
        openTrustedLinkIn(window, url, where);
        openWebLinkIn(window, url, where);
    };
}