declare module "resource://gre/modules/FxAccountsTelemetry.sys.mjs" {
    export class FxAccountsTelemetry {
        constructor(fxai);
        recordEvent(object?, method?, value?);
        generateUUID();
        generateFlowID();
        _setHashedUID(hashedUID?);
        getSanitizedUID();
        sanitizeDeviceId(deviceId?);
        recordConnection(services?);
        recordDisconnection();
    }
}