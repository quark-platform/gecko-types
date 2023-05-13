declare module "resource://gre/modules/psm/RemoteSecuritySettings.sys.mjs" {
    var RemoteSecuritySettings: {
        _initialized;
        OneCRLBlocklistClient;
        IntermediatePreloadsClient;
        CRLiteFiltersClient;
        init();
    };
}