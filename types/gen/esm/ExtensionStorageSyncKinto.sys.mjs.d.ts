declare module "resource://gre/modules/ExtensionStorageSyncKinto.sys.mjs" {
    var extensionStorageSyncKinto;
    export class ExtensionStorageSyncKinto {
        constructor(fxaService);
        getExtensions();
        syncAll();
        sync();
        _syncCollection();
        _requestWithToken();
        _deleteBucket();
        ensureSaltsFor();
        hasSaltsFor();
        ensureCanSync();
        updateKeyRingKB();
        checkSyncKeyRing();
        _syncKeyRing();
        registerInUse();
        getCollection();
        set();
        remove();
        clearAll();
        clear();
        get();
        getBytesInUse();
        addOnChangedListener();
        removeOnChangedListener();
        notifyListeners();
    }
    var KintoStorageTestUtils: {
        CollectionKeyEncryptionRemoteTransformer;
        CryptoCollection;
        EncryptionRemoteTransformer;
        KeyRingEncryptionRemoteTransformer;
        cleanUpForContext;
        idToKey;
        keyToId;
    };
}