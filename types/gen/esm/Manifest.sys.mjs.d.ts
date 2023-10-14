declare module "resource://gre/modules/Manifest.sys.mjs" {
    var Manifests: {
        _initialize();
        manifestInstalled(manifest);
        findManifestUrl(url);
        getManifest(browser, manifestUrl);
    };
}