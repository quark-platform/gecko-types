declare module "resource://gre/modules/services-settings/RemoteSettingsClient.sys.mjs" {
    export class RemoteSettingsClient {
        get APIError();
        get NetworkError();
        get NetworkOfflineError();
        get ServerContentParseError();
        get BackendError();
        get BackoffError();
        get TimeoutError();
        get StorageError();
        get InvalidSignatureError();
        get MissingSignatureError();
        get CorruptedDataError();
        get UnknownCollectionError();
        constructor(collectionName);
        refreshBucketName();
        get identifier();
        get lastCheckTimePref();
        httpClient();
        getLastModified();
        get();
        sync();
        maybeSync();
        _adjustedError();
        _telemetryFromError();
        _importJSONDump();
        _validateCollectionSignature();
        _importChanges();
        _fetchChangeset();
        _filterSyncResult();
        _filterEntries();
        _cleanLocalFields();
    }
}