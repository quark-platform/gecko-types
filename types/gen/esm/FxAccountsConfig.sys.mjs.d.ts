declare module "resource://gre/modules/FxAccountsConfig.sys.mjs" {
    export var FxAccountsConfig: {
        promiseEmailURI(email?, entrypoint?, extraParams?);
        promiseConnectAccountURI(entrypoint?, extraParams?);
        promiseForceSigninURI(entrypoint?, extraParams?);
        promiseManageURI(entrypoint?, extraParams?);
        promiseChangeAvatarURI(entrypoint?, extraParams?);
        promiseManageDevicesURI(entrypoint?, extraParams?);
        promiseConnectDeviceURI(entrypoint?, extraParams?);
        promisePairingURI(extraParams?);
        promiseOAuthURI(extraParams?);
        promiseMetricsFlowURI(entrypoint?, extraParams?);
        get defaultParams(): any;
        _buildURL(path?, param1?);
        _buildURLFromString(href?, extraParams?);
        resetConfigURLs();
        getAutoConfigURL();
        ensureConfigured();
        isProductionConfig();
        updateConfigURLs();
        fetchConfigDocument(rootURL?);
        getSignedInUser();
    };
}