declare module "resource://gre/modules/ManifestIcons.sys.mjs" {
    export var ManifestIcons: {
        browserFetchIcon(aBrowser?, manifest?, iconSize?);
        contentFetchIcon(aWindow?, manifest?, iconSize?);
    };
}