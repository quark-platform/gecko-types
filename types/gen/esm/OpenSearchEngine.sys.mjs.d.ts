declare module "resource://gre/modules/OpenSearchEngine.sys.mjs" {
    import type { SearchEngine } from "resource://gre/modules/SearchEngine.sys.mjs";
    export class OpenSearchEngine extends SearchEngine {
        constructor(param0);
        toJSON();
        install(uri?, callback?);
        _onLoad(callback?, bytes?);
        _initFromData();
        _parseURL(element?);
        _parseImage(element?);
        _parse();
        get _hasUpdates();
        get _updateURI();
        getAnonymizedLoadPath(shortName?, uri?);
    }
}