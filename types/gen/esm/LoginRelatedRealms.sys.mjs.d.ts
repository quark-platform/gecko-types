declare module "resource://gre/modules/LoginRelatedRealms.sys.mjs" {
    export class LoginRelatedRealmsParent extends JSWindowActorParent {
        onRemoteSettingsSync();
        getSharedCredentialsCollection();
        findRelatedRealms();
    }
}