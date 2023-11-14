declare module "resource://gre/modules/PolicySearchEngine.sys.mjs" {
    import type { SearchEngine } from "resource://gre/modules/SearchEngine.sys.mjs";
    export class PolicySearchEngine extends SearchEngine {
        constructor(param0);
        get inMemory();
        get telemetryId();
        update(details?);
        toJSON();
    }
}