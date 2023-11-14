declare module "resource://gre/modules/ManifestObtainer.sys.mjs" {
    export var ManifestObtainer: {
        browserObtainManifest(aBrowser?, aOptions?);
        contentObtainManifest(aContent?, aOptions?);
    };
}