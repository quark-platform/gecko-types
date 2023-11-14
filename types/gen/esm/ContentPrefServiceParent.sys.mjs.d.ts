declare module "resource://gre/modules/ContentPrefServiceParent.sys.mjs" {
    export class ContentPrefsParent extends JSProcessActorParent {
        constructor();
        didDestroy();
        receiveMessage();
        onContentPrefSet();
        onContentPrefRemoved();
    }
}