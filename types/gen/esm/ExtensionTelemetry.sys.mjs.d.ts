declare module "resource://gre/modules/ExtensionTelemetry.sys.mjs" {
    export function getTrimmedString(str?);
    export function getErrorNameForTelemetry(error?);
    export var ExtensionTelemetry;
}