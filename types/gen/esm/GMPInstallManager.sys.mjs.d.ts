declare module "resource://gre/modules/GMPInstallManager.sys.mjs" {
    export function GMPInstallManager();
    export function GMPAddon(addon?);
    export function GMPExtractor(zipPath?, relativeInstallPath?);
    export function GMPDownloader(gmpAddon?);
}