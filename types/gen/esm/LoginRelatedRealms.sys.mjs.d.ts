declare module "resource://gre/modules/LoginRelatedRealms.sys.mjs" {
    export class LoginRelatedRealmsParent {
        onRemoteSettingsSync();
        getSharedCredentialsCollection();
        findRelatedRealms();
    }
}