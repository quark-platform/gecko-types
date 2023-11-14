declare module "resource://app/modules/MacAttribution.sys.mjs" {
    export var MacAttribution: {
        get applicationPath(): any;
        getReferrerUrl(path?);
    };
}