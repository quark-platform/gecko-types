declare module "resource://gre/modules/ForgetAboutSite.sys.mjs" {
    var ForgetAboutSite: {
        removeDataFromBaseDomain(aDomainOrHost?);
        removeDataFromDomain(aDomain?);
    };
}