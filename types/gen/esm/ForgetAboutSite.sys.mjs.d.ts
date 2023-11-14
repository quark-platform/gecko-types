declare module "resource://gre/modules/ForgetAboutSite.sys.mjs" {
    export var ForgetAboutSite: {
        removeDataFromBaseDomain(aDomainOrHost?);
        removeDataFromDomain(aDomain?);
    };
}