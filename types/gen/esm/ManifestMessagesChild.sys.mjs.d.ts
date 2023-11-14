declare module "resource://gre/modules/ManifestMessagesChild.sys.mjs" {
    export class ManifestMessagesChild extends JSWindowActorChild {
        receiveMessage();
        hasManifestLink();
        obtainManifest();
        fetchIcon();
    }
}