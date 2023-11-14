declare module "resource://gre/modules/AbuseReporter.sys.mjs" {
    export class AbuseReportError extends Error {
        constructor(errorType, param1);
    }
    export var AbuseReporter: {
        _lastReportTimestamp;
        updateLastReportTimestamp();
        getTimeFromLastReport();
        isSupportedAddonType(addonType?);
        createAbuseReport(addonId?);
        queryAMOAddonDetails(addonId?, reportEntryPoint?);
        getReportData(addon?);
        getOpenDialog();
        openDialog(addonId?, reportEntryPoint?, browser?);
    };
}