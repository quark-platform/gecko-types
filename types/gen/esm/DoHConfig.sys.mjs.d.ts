declare module "resource://app/modules/DoHConfig.sys.mjs" {
    export var DoHConfigController: {
        initComplete;
        _resolveInitComplete;
        currentConfig;
        loadRegion();
        init();
        _uninit();
        observe(subject?, topic?, data?);
        QueryInterface;
        updateFromRemoteSettings();
        kConfigUpdateTopic;
        notifyNewConfig();
    };
}