declare module "resource://gre/modules/services-settings/RemoteSettingsClient.sys.mjs" {
    export class RemoteSettingsClient extends EventEmitter {
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
        sync(options?);
        maybeSync(expectedTimestamp?);
        _adjustedError(e?);
        _telemetryFromError(e?);
        _importJSONDump();
        _validateCollectionSignature(records?, timestamp?, metadata?);
        _importChanges(localRecords?, localTimestamp?, localMetadata?, expectedTimestamp?);
        _fetchChangeset(expectedTimestamp?, since?);
        _filterSyncResult(syncResult?);
        _filterEntries(data?);
        _cleanLocalFields(record?);
    }
}