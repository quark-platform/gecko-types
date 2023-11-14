declare module "resource://gre/modules/UserSearchEngine.sys.mjs" {
    import type { SearchEngine } from "resource://gre/modules/SearchEngine.sys.mjs";
    export class UserSearchEngine extends SearchEngine {
        constructor();
        get telemetryId();
    }
}