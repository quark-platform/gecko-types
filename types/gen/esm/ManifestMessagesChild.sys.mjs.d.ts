declare module "resource://gre/modules/ManifestMessagesChild.sys.mjs" {
    export class ManifestMessagesChild extends JSWindowActorChild {
        receiveMessage(message?);
        hasManifestLink();
        obtainManifest(options?);
        fetchIcon(param0?);
    }
}