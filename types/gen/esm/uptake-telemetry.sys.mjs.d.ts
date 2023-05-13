declare module "resource://gre/modules/services-common/uptake-telemetry.sys.mjs" {
    var Policy: {
        _clientIDHash;
        getClientID();
        getClientIDHash();
        _doComputeClientIDHash();
        getChannel();
    };
    export class UptakeTelemetry {
        get STATUS();
        get Policy();
        report();
    }
}