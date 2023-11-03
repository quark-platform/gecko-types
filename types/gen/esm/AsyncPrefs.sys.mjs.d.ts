declare module "resource://gre/modules/AsyncPrefs.sys.mjs" {
    export class AsyncPrefsChild {
        set();
        reset();
    }
    var AsyncPrefs: {
        set(pref?, value?);
        reset(pref?, value?);
    };
    export class AsyncPrefsParent {
        set();
        reset();
        receiveMessage();
    }
}