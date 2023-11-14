declare module "resource://gre/modules/AsyncPrefs.sys.mjs" {
    export class AsyncPrefsChild extends JSProcessActorChild {
        set(pref?, value?);
        reset(pref?);
    }
    export var AsyncPrefs: {
        set(pref?, value?);
        reset(pref?, value?);
    };
    export class AsyncPrefsParent extends JSProcessActorParent {
        set(pref?, value?);
        reset(pref?);
        receiveMessage(msg?);
    }
}