declare module "resource://gre/modules/PermissionsUtils.sys.mjs" {
    var PermissionsUtils: {
        importFromPrefs(aPrefBranch, aPermission);
    };
    var PermissionsTestUtils: {
        clearImportedPrefBranches();
    };
}