declare module "resource://gre/modules/SearchEngineSelector.sys.mjs" {
    export class SearchEngineSelector {
        constructor(listener);
        getEngineConfiguration();
        _getConfiguration();
        _onConfigurationUpdated();
        fetchEngineConfiguration();
        _sort();
        _sortIndex();
        _isDefault();
        _copyObject();
        _isInSection();
    }
}