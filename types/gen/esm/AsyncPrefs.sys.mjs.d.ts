declare module "resource://gre/modules/AsyncPrefs.sys.mjs" {
    export class AsyncPrefsChild extends JSProcessActorChild {
        set();
        reset();
    }
    var AsyncPrefs: {
        set(pref?, value?);
        reset(pref?, value?);
    };
    export class AsyncPrefsParent extends JSProcessActorParent {
        set();
        reset();
        receiveMessage();
    }
}