declare module "resource://gre/modules/netwerk-dns/PublicSuffixList.sys.mjs" {
    var PublicSuffixList: {
        CLIENT;
        init();
        getFilePath(fileURI);
        notifyUpdate(fileURI);
        onUpdate();
    };
}