declare module "resource://gre/modules/OpenSearchEngine.sys.mjs" {
    import type { SearchEngine } from "resource://gre/modules/SearchEngine.sys.mjs";
    export class OpenSearchEngine extends SearchEngine {
        constructor();
        toJSON();
        install();
        _onLoad();
        _initFromData();
        _parseURL();
        _parseImage();
        _parse();
        get _hasUpdates();
        get _updateURI();
        getAnonymizedLoadPath();
    }
}