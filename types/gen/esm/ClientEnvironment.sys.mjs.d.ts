declare module "resource://gre/modules/components-utils/ClientEnvironment.sys.mjs" {
    export class ClientEnvironmentBase {
        get distribution();
        get telemetry();
        get liveTelemetry();
        get randomizationId();
        get version();
        get channel();
        get isDefaultBrowser();
        get searchEngine();
        get syncSetup();
        get syncDesktopDevices();
        get syncMobileDevices();
        get syncTotalDevices();
        get addons();
        get plugins();
        get locale();
        get doNotTrack();
        get os();
        get attribution();
        get appinfo();
    }
}