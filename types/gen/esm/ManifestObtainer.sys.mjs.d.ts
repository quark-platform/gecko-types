declare module "resource://gre/modules/ManifestObtainer.sys.mjs" {
    var ManifestObtainer: {
        browserObtainManifest(aBrowser, aOptions);
        contentObtainManifest(aContent, aOptions);
    };
}