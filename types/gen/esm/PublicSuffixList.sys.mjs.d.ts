declare module "resource://gre/modules/netwerk-dns/PublicSuffixList.sys.mjs" {
    export var PublicSuffixList: {
        CLIENT;
        init();
        getFilePath(fileURI?);
        notifyUpdate(fileURI?);
        onUpdate(param0?);
    };
}