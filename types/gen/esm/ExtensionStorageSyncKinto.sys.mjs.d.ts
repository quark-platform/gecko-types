declare module "resource://gre/modules/ExtensionStorageSyncKinto.sys.mjs" {
    export var extensionStorageSyncKinto;
    export class ExtensionStorageSyncKinto {
        constructor(fxaService);
        getExtensions();
        syncAll();
        sync(extension?, collection?);
        _syncCollection(collection?, options?);
        _requestWithToken(description?, f?);
        _deleteBucket();
        ensureSaltsFor(keysRecord?, extIds?);
        hasSaltsFor(keysRecord?, extIds?);
        ensureCanSync(extIds?);
        updateKeyRingKB();
        checkSyncKeyRing();
        _syncKeyRing(cryptoKeyRecord?);
        registerInUse(extension?, context?);
        getCollection(extension?, context?);
        set(extension?, items?, context?);
        remove(extension?, keys?, context?);
        clearAll();
        clear(extension?, context?);
        get(extension?, spec?, context?);
        getBytesInUse(extension?, keys?, context?);
        addOnChangedListener(extension?, listener?, context?);
        removeOnChangedListener(extension?, listener?);
        notifyListeners(extension?, changes?);
    }
    export var KintoStorageTestUtils: {
        CollectionKeyEncryptionRemoteTransformer;
        CryptoCollection;
        EncryptionRemoteTransformer;
        KeyRingEncryptionRemoteTransformer;
        cleanUpForContext;
        idToKey;
        keyToId;
    };
}