declare module "resource://gre/modules/OpenSearchEngine.sys.mjs" {
    export class OpenSearchEngine {
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