declare module "resource://gre/modules/FxAccountsConfig.sys.mjs" {
    var FxAccountsConfig: {
        promiseEmailURI(email, entrypoint);
        promiseConnectAccountURI(entrypoint);
        promiseForceSigninURI(entrypoint);
        promiseManageURI(entrypoint);
        promiseChangeAvatarURI(entrypoint);
        promiseManageDevicesURI(entrypoint);
        promiseConnectDeviceURI(entrypoint);
        promisePairingURI();
        promiseOAuthURI();
        promiseMetricsFlowURI(entrypoint);
        get defaultParams(): any;
        _buildURL(path);
        _buildURLFromString(href);
        resetConfigURLs();
        getAutoConfigURL();
        ensureConfigured();
        isProductionConfig();
        updateConfigURLs();
        fetchConfigDocument();
        getSignedInUser();
    };
}