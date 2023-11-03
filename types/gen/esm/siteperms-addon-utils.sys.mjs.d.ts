declare module "resource://gre/modules/addons/siteperms-addon-utils.sys.mjs" {
    var GATED_PERMISSIONS;
    var SITEPERMS_ADDON_PROVIDER_PREF;
    var SITEPERMS_ADDON_TYPE;
    var SITEPERMS_ADDON_BLOCKEDLIST_PREF;
    function isGatedPermissionType(type?);
    function isKnownPublicSuffix(siteOrigin?);
    function addGatedPermissionTypesForXpcShellTests(permissionTypes?);
    function isPrincipalInSitePermissionsBlocklist(principal?);
}