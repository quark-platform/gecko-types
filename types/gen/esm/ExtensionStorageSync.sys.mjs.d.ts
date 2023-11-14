declare module "resource://gre/modules/ExtensionStorageSync.sys.mjs" {
    export class ExtensionStorageSync {
        constructor();
        _promisify(fnName?, extension?, context?, param3?);
        set(extension?, items?, context?);
        remove(extension?, keys?, context?);
        clear(extension?, context?);
        clearOnUninstall(extensionId?);
        get(extension?, spec?, context?);
        getBytesInUse(extension?, keys?, context?);
        addOnChangedListener(extension?, listener?, context?);
        removeOnChangedListener(extension?, listener?);
        notifyListeners(extId?, changes?);
    }
    var extensionStorageSync;
}