declare module "resource://gre/modules/GMPInstallManager.sys.mjs" {
    function GMPInstallManager();
    function GMPAddon(addon?);
    function GMPExtractor(zipPath?, relativeInstallPath?);
    function GMPDownloader(gmpAddon?);
}