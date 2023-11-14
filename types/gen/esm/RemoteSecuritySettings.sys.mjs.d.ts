declare module "resource://gre/modules/psm/RemoteSecuritySettings.sys.mjs" {
    export var RemoteSecuritySettings: {
        _initialized;
        OneCRLBlocklistClient;
        IntermediatePreloadsClient;
        CRLiteFiltersClient;
        init();
    };
}