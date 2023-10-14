declare module "resource://gre/modules/AbuseReporter.sys.mjs" {
    export class AbuseReportError {
        constructor(errorType);
    }
    var AbuseReporter: {
        _lastReportTimestamp;
        updateLastReportTimestamp();
        getTimeFromLastReport();
        isSupportedAddonType(addonType);
        createAbuseReport(addonId);
        queryAMOAddonDetails(addonId, reportEntryPoint);
        getReportData(addon);
        getOpenDialog();
        openDialog(addonId, reportEntryPoint, browser);
    };
}