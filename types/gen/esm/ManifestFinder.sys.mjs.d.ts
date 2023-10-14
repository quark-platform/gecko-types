declare module "resource://gre/modules/ManifestFinder.sys.mjs" {
    var ManifestFinder: {
        contentHasManifestLink(aContent);
        browserHasManifestLink(aBrowser);
    };
}