declare module "resource://app/modules/PingCentre.sys.mjs" {
    export class PingCentre {
        constructor(options);
        get enabled();
        _onLoggingPrefChange();
        _onTelemetryPrefChange();
        _onFhrPrefChange();
        _createExperimentsPayload();
        _createStructuredIngestionPing();
        _sendStandalonePing();
        sendStructuredIngestionPing();
        uninit();
    }
    var PingCentreConstants: {
        FHR_UPLOAD_ENABLED_PREF;
        TELEMETRY_PREF;
        LOGGING_PREF;
    };
}