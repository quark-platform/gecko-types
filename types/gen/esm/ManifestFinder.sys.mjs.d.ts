declare module "resource://gre/modules/ManifestFinder.sys.mjs" {
    export var ManifestFinder: {
        contentHasManifestLink(aContent?);
        browserHasManifestLink(aBrowser?);
    };
}