declare module "resource://app/modules/URILoadingHelper.sys.mjs" {
    export var URILoadingHelper: {
        openLinkIn(window?, url?, where?, params?);
        getTargetWindow(window?);
        openUILink(window?, url?, event?, aIgnoreButton?, aIgnoreAlt?, aAllowThirdPartyFixup?, aPostData?, aReferrerInfo?);
        openTrustedLinkIn(window?, url?, where?, params?);
        openWebLinkIn(window?, url?, where?, params?);
    };
}