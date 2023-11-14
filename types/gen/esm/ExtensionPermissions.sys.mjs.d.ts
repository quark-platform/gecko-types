declare module "resource://gre/modules/ExtensionPermissions.sys.mjs" {
    export var ExtensionPermissions: {
        _update(extensionId?, perms?);
        _get(extensionId?);
        _getCached(extensionId?);
        get(extensionId?);
        _fixupAllUrlsPerms(perms?);
        add(extensionId?, perms?, emitter?);
        remove(extensionId?, perms?, emitter?);
        removeAll(extensionId?);
        _has(extensionId?);
        _resetVersion();
        _useLegacyStorageBackend;
        _uninit();
        _getStore();
        addListener(listener?);
        removeListener(listener?);
    };
    export var OriginControls: {
        allDomains;
        getState(policy?, nativeTab?);
        getAttentionState(policy?, window?);
        setAlwaysOn(policy?, uri?);
        setWhenClicked(policy?, uri?);
        getStateMessageIDs(param0?);
    };
    export var QuarantinedDomains: {
        getUserAllowedAddonIdPrefName(addonId?);
        isUserAllowedAddonId(addonId?);
        setUserAllowedAddonIdPref(addonId?, userAllowed?);
        clearUserPref(addonId?);
        PREF_ADDONS_BRANCH_NAME;
        PREF_DOMAINSLIST_NAME;
        _initialized;
        _init();
        _onAMRemoteSettingsSetPref(subject?, _topic?);
        _onUserAllowedPrefChanged(_subject?, _topic?, prefName?);
        _onUpdatedDomainsListTelemetry(_subject?, _topic?, _prefName?);
        _transformDomainsListPrefValue(value?);
    };
}