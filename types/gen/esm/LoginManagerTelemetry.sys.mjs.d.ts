declare module "resource://gre/modules/LoginManagerTelemetry.sys.mjs" {/**
 * Provides the logic for recording all password manager related telemetry data.
 */
export class LoginManagerTelemetry {
    static recordAutofillResult(result: any): void;
}
export default LoginManagerTelemetry;
}