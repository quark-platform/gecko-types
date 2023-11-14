declare module "resource://gre/modules/addons/siteperms-addon-utils.sys.mjs" {
    export var GATED_PERMISSIONS;
    export var SITEPERMS_ADDON_PROVIDER_PREF;
    export var SITEPERMS_ADDON_TYPE;
    export var SITEPERMS_ADDON_BLOCKEDLIST_PREF;
    export function isGatedPermissionType(type?);
    export function isKnownPublicSuffix(siteOrigin?);
    export function addGatedPermissionTypesForXpcShellTests(permissionTypes?);
    export function isPrincipalInSitePermissionsBlocklist(principal?);
}