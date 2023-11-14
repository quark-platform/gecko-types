declare module "resource://gre/modules/ContentPrefServiceParent.sys.mjs" {
    export class ContentPrefsParent extends JSProcessActorParent {
        constructor();
        didDestroy();
        receiveMessage(msg?);
        onContentPrefSet(group?, name?, value?, isPrivate?);
        onContentPrefRemoved(group?, name?, isPrivate?);
    }
}