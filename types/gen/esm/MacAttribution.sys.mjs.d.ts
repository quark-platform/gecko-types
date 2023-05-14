declare module "resource://app/modules/MacAttribution.sys.mjs" {
    var MacAttribution: {
        get applicationPath(): any;
        getReferrerUrl(path);
    };
}