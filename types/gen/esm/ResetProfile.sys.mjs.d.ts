declare module "resource://gre/modules/ResetProfile.sys.mjs" {
    var ResetProfile: {
        resetSupported();
        openConfirmationDialog(window);
    };
}