declare module "resource://gre/modules/PermissionsUtils.sys.mjs" {
    export var PermissionsUtils: {
        importFromPrefs(aPrefBranch?, aPermission?);
    };
    export var PermissionsTestUtils: {
        clearImportedPrefBranches();
    };
}