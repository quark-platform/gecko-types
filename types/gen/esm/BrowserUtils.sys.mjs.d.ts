declare module "resource://gre/modules/BrowserUtils.sys.mjs" {
    var BrowserUtils: {
        principalWithMatchingOA(principal, existingPrincipal);
        mimeTypeIsTextBased(mimeType);
        canFindInPage(location);
        isFindbarVisible(docShell);
        promiseObserved(topic);
        formatURIStringForDisplay(uriString);
        formatURIForDisplay(uri);
        getShareableURL(url);
        hrefAndLinkNodeForClickEvent(event);
        whereToOpenLink(e, ignoreButton, ignoreAlt);
        getRootEvent(aEvent);
        PromoType: {
            DEFAULT: number;
            VPN: number;
            RELAY: number;
            FOCUS: number;
            PIN: number;
            COOKIE_BANNERS: number;
        };
        shouldShowPromo(promoType);
        shouldShowVPNPromo();
        sendToDeviceEmailsSupported();
    };
}