declare module "resource://gre/modules/FxAccountsTelemetry.sys.mjs" {
    export class FxAccountsTelemetry {
        constructor(fxai);
        recordEvent();
        generateUUID();
        generateFlowID();
        _setHashedUID();
        getSanitizedUID();
        sanitizeDeviceId();
        recordConnection();
        recordDisconnection();
    }
}