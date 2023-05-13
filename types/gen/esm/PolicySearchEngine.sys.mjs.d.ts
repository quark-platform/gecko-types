declare module "resource://gre/modules/PolicySearchEngine.sys.mjs" {
    export class PolicySearchEngine {
        constructor();
        get inMemory();
        get telemetryId();
        update();
        toJSON();
    }
}