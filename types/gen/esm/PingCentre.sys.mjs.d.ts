declare module "resource://app/modules/PingCentre.sys.mjs" {
    export class PingCentre {
        constructor(options);
        get enabled();
        _onLoggingPrefChange(aSubject?, aTopic?, prefKey?);
        _onTelemetryPrefChange(aSubject?, aTopic?, prefKey?);
        _onFhrPrefChange(aSubject?, aTopic?, prefKey?);
        _createExperimentsPayload();
        _createStructuredIngestionPing(data?);
        _sendStandalonePing(endpoint?, payload?);
        sendStructuredIngestionPing(data?, endpoint?, param2?);
        uninit();
    }
    var PingCentreConstants: {
        FHR_UPLOAD_ENABLED_PREF;
        TELEMETRY_PREF;
        LOGGING_PREF;
    };
}