declare module "resource://gre/modules/LoginCSVImport.sys.mjs" {
    var ImportFailedErrorType;
    export class ImportFailedException {
        constructor(errorType, message);
    }
    export class LoginCSVImport {
        _getCSVColumnToFieldMap();
        _getVanillaLoginFromCSVObject();
        _recordHistogramTelemetry();
        importFromCSV();
    }
}