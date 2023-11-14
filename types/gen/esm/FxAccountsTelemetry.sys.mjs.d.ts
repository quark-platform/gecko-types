declare module "resource://gre/modules/FxAccountsTelemetry.sys.mjs" {
    export class FxAccountsTelemetry {
        constructor(fxai);
        recordEvent(object?, method?, value?, param3?);
        generateUUID();
        generateFlowID();
        _setHashedUID(hashedUID?);
        getSanitizedUID();
        sanitizeDeviceId(deviceId?);
        recordConnection(services?, param1?);
        recordDisconnection(param0?, param1?);
    }
}