declare module "resource://gre/modules/ManifestIcons.sys.mjs" {export namespace ManifestIcons {
    function browserFetchIcon(aBrowser: any, manifest: any, iconSize: any): Promise<any>;
    function contentFetchIcon(aWindow: any, manifest: any, iconSize: any): Promise<any>;
}
}