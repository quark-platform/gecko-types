declare module "resource://gre/modules/ResetProfile.sys.mjs" {
    export var ResetProfile: {
        resetSupported();
        openConfirmationDialog(window?);
    };
}