declare module "resource://gre/modules/PolicySearchEngine.sys.mjs" {
    import type { SearchEngine } from "resource://gre/modules/SearchEngine.sys.mjs";
    export class PolicySearchEngine extends SearchEngine {
        constructor();
        get inMemory();
        get telemetryId();
        update();
        toJSON();
    }
}