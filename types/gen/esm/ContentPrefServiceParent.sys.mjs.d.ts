declare module "resource://gre/modules/ContentPrefServiceParent.sys.mjs" {
    export class ContentPrefsParent {
        constructor();
        didDestroy();
        receiveMessage();
        onContentPrefSet();
        onContentPrefRemoved();
    }
}