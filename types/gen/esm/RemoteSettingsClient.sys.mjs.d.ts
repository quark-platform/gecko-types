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
        constructor(collectionName, param1);
        refreshBucketName();
        get identifier();
        get lastCheckTimePref();
        httpClient();
        getLastModified();
        get(param0?);
        sync(options?);
        maybeSync(expectedTimestamp?, param1?);
        _adjustedError(e?);
        _telemetryFromError(e?, param1?);
        _importJSONDump();
        _validateCollectionSignature(records?, timestamp?, metadata?);
        _importChanges(localRecords?, localTimestamp?, localMetadata?, expectedTimestamp?, param4?);
        _fetchChangeset(expectedTimestamp?, since?);
        _filterSyncResult(syncResult?);
        _filterEntries(data?);
        _cleanLocalFields(record?);
    }
}