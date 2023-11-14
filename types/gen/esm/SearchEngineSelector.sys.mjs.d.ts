declare module "resource://gre/modules/SearchEngineSelector.sys.mjs" {
    export class SearchEngineSelector {
        constructor(listener);
        getEngineConfiguration();
        _getConfiguration(param0?);
        _onConfigurationUpdated(param0?);
        fetchEngineConfiguration(param0?);
        _sort(defaultEngine?, privateEngine?, a?, b?);
        _sortIndex(obj?, defaultEngine?, privateEngine?);
        _isDefault(obj?);
        _copyObject(target?, source?);
        _isInSection(region?, locale?, config?);
    }
}