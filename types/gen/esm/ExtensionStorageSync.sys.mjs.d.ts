declare module "resource://gre/modules/ExtensionStorageSync.sys.mjs" {
    export class ExtensionStorageSync {
        constructor();
        _promisify();
        set();
        remove();
        clear();
        clearOnUninstall();
        get();
        getBytesInUse();
        addOnChangedListener();
        removeOnChangedListener();
        notifyListeners();
    }
    var extensionStorageSync;
}