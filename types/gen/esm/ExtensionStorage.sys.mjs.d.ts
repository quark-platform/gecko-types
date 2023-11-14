declare module "resource://gre/modules/ExtensionStorage.sys.mjs" {
    export var ExtensionStorage: {
        jsonFilePromises;
        listeners;
        _readFile(extensionId?);
        _serializableMap(data?);
        getFile(extensionId?);
        clearCachedFile(extensionId?);
        sanitize(value?, context?);
        getExtensionDir(extensionId?);
        getStorageFile(extensionId?);
        set(extensionId?, items?);
        remove(extensionId?, items?);
        clear(extensionId?);
        get(extensionId?, keys?);
        _filterProperties(extensionId?, data?, keys?);
        addOnChangedListener(extensionId?, listener?);
        removeOnChangedListener(extensionId?, listener?);
        notifyListeners(extensionId?, changes?);
        init();
        observe(subject?, topic?, data?);
        serialize;
        serializeForContext(context?, items?);
        deserializeForContext(context?, items?);
    };
    export var extensionStorageSession: {
        buckets;
        listeners;
        get(extension?, items?);
        set(extension?, items?);
        remove(extension?, keys?);
        clear(extension?);
        registerListener(extension?, listener?);
        notifyListeners(extension?, changes?);
    };
}