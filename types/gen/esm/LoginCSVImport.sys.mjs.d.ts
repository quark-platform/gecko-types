declare module "resource://gre/modules/LoginCSVImport.sys.mjs" {
    export var ImportFailedErrorType;
    export class ImportFailedException extends Error {
        constructor(errorType, message);
    }
    export class LoginCSVImport {
        _getCSVColumnToFieldMap();
        _getVanillaLoginFromCSVObject(csvObject?, csvColumnToFieldMap?);
        _recordHistogramTelemetry(histogram?, report?);
        importFromCSV(filePath?);
    }
}