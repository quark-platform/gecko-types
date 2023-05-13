declare module "resource://gre/modules/BrowserTelemetryUtils.sys.mjs" {
    var BrowserTelemetryUtils: {
        recordSiteOriginTelemetry(aWindows, aIsGeckoView);
        computeSiteOriginCount(aWindows, aIsGeckoView);
        _recordSiteOriginTelemetry(aWindows, aIsGeckoView);
    };
}