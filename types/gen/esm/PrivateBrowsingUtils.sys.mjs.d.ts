declare module "resource://gre/modules/PrivateBrowsingUtils.sys.mjs" {
    var PrivateBrowsingUtils: {
        get enabled(): any;
        isWindowPrivate;
        isContentWindowPrivate;
        isBrowserPrivate(aBrowser?);
        privacyContextFromWindow;
        get permanentPrivateBrowsing(): any;
        enterTemporaryAutoStartMode;
        get isInTemporaryAutoStartMode(): any;
    };
}