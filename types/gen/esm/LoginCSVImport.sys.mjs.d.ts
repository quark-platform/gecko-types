declare module "resource://gre/modules/LoginCSVImport.sys.mjs" {
    var ImportFailedErrorType;
    export class ImportFailedException extends Error {
        constructor(errorType, message);
    }
    export class LoginCSVImport {
        _getCSVColumnToFieldMap();
        _getVanillaLoginFromCSVObject();
        _recordHistogramTelemetry();
        importFromCSV();
    }
}