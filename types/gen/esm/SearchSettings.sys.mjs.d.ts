declare module "resource://gre/modules/SearchSettings.sys.mjs" {
    export class SearchSettings {
        constructor(searchService);
        addObservers();
        removeObservers();
        get();
        _delayedWrite();
        _ensurePendingWritesCompleted();
        _write();
        setMetaDataAttribute();
        setVerifiedMetaDataAttribute();
        getMetaDataAttribute();
        getSettingsMetaData();
        getVerifiedMetaDataAttribute();
        setEngineMetaDataAttribute();
        getEngineMetaDataAttribute();
        getHashName();
        shutdown();
        observe();
        isCurrentAndCachedSettingsEqual();
        migrateEngineIds();
    }
}