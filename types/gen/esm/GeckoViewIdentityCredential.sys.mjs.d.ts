declare module "resource://gre/modules/GeckoViewIdentityCredential.sys.mjs" {
    var GeckoViewIdentityCredential: {
        onShowProviderPrompt(aBrowser, providers, resolve, reject);
        onShowAccountsPrompt(aBrowser, accounts, resolve, reject);
        onShowPolicyPrompt(aBrowser, privacyPolicyUrl, termsOfServiceUrl, providerDomain, host, icon, resolve, reject);
    };
}