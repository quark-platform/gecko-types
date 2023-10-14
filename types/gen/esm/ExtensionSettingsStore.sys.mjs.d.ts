declare module "resource://gre/modules/ExtensionSettingsStore.sys.mjs" {
    var ExtensionSettingsStore: {
        SETTING_USER_SET;
        initialize();
        addSetting(id, type, key, value, initialValueCallback, callbackArgument, settingDataUpdate);
        removeSetting(id, type, key);
        enable(id, type, key);
        disable(id, type, key);
        select(id, type, key);
        getAllForExtension(id, type);
        getSetting(type, key, id);
        getAllSettings(type, key);
        hasSetting(id, type, key);
        getLevelOfControl(id, type, key);
        _reloadFile(saveChanges);
    };
}