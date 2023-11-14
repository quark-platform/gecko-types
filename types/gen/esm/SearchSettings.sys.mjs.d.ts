declare module "resource://gre/modules/SearchSettings.sys.mjs" {
    export class SearchSettings {
        constructor(searchService);
        addObservers();
        removeObservers();
        get(param0?);
        _delayedWrite();
        _ensurePendingWritesCompleted(param0?);
        _write();
        setMetaDataAttribute(name?, val?);
        setVerifiedMetaDataAttribute(name?, val?);
        getMetaDataAttribute(name?);
        getSettingsMetaData();
        getVerifiedMetaDataAttribute(name?, isAppProvided?);
        setEngineMetaDataAttribute(engineName?, property?, value?);
        getEngineMetaDataAttribute(engineName?, property?);
        getHashName(name?);
        shutdown(state?);
        observe(engine?, topic?, verb?);
        isCurrentAndCachedSettingsEqual();
        migrateEngineIds(clonedSettings?);
    }
}