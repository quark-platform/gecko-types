declare module "resource://gre/modules/UpdateUtils.sys.mjs" {
    var UpdateUtils: {
        _locale;
        _configFilePath;
        getUpdateChannel(aIncludePartners?);
        get UpdateChannel(): any;
        formatUpdateURL(url?);
        getLocale();
        getConfigFilePath();
        get configFilePath(): any;
        getAppUpdateAutoEnabled();
        setAppUpdateAutoEnabled(enabledValue?);
        appUpdateAutoSettingIsLocked();
        PER_INSTALLATION_PREFS_SUPPORTED;
        PER_INSTALLATION_PREF_TYPE_BOOL;
        PER_INSTALLATION_PREF_TYPE_ASCII_STRING;
        PER_INSTALLATION_PREF_TYPE_INT;
        PER_INSTALLATION_PREFS;
        initPerInstallPrefs();
        readUpdateConfigSetting(prefName?);
        writeUpdateConfigSetting(prefName?, value?, options?);
        appUpdateSettingIsLocked(prefName?);
    };
}