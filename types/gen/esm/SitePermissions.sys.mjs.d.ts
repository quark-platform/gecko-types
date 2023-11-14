declare module "resource://app/modules/SitePermissions.sys.mjs" {
    export var SitePermissions: {
        UNKNOWN;
        ALLOW;
        BLOCK;
        PROMPT;
        ALLOW_COOKIES_FOR_SESSION;
        AUTOPLAY_BLOCKED_ALL;
        SCOPE_REQUEST;
        SCOPE_TEMPORARY;
        SCOPE_SESSION;
        SCOPE_PERSISTENT;
        SCOPE_POLICY;
        SCOPE_GLOBAL;
        PERM_KEY_DELIMITER;
        _permissionsArray;
        _defaultPrefBranch;
        _temporaryPermissions;
        getAllByPrincipal(principal?);
        getAllForBrowser(browser?);
        getAllPermissionDetailsForBrowser(browser?);
        isSupportedPrincipal(principal?);
        isSupportedScheme(scheme?);
        listPermissions();
        isSitePermission(type?);
        invalidatePermissionList(data?, previous?, latest?);
        getAvailableStates(permissionID?);
        getDefault(permissionID?);
        setDefault(permissionID?, state?);
        getForPrincipal(principal?, permissionID?, browser?);
        setForPrincipal(principal?, permissionID?, state?, scope?, browser?, expireTimeMS?);
        removeFromPrincipal(principal?, permissionID?, browser?);
        clearTemporaryBlockPermissions(browser?);
        copyTemporaryPermissions(browser?, newBrowser?);
        getPermissionLabel(permissionID?);
        getMultichoiceStateLabel(permissionID?, state?);
        getCurrentStateLabel(state?, id?, scope?);
    };
}