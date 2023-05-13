declare module "resource://gre/modules/SearchService.sys.mjs" {
    export class SearchService {
        constructor();
        get defaultEngine();
        set defaultEngine(newEngine);
        get defaultPrivateEngine();
        set defaultPrivateEngine(newEngine);
        getDefault();
        setDefault();
        getDefaultPrivate();
        setDefaultPrivate();
        get appDefaultEngine();
        get appPrivateDefaultEngine();
        get isInitialized();
        getDefaultEngineInfo();
        getEngineByName();
        getEngineById();
        getEngineByAlias();
        getEngines();
        getVisibleEngines();
        getAppProvidedEngines();
        getEnginesByExtensionID();
        init();
        runBackgroundChecks();
        reset();
        resetEngineSelector();
        resetToAppDefaultEngine();
        maybeSetAndOverrideDefault();
        addUserEngine();
        addEnginesFromExtension();
        addOpenSearchEngine();
        removeWebExtensionEngine();
        removeEngine();
        moveEngine();
        restoreDefaultEngines();
        parseSubmissionURL();
        notify();
        _getEngineDefault();
        _maybeReloadEngines();
        _reloadEngines();
        _fetchEngineSelectorEngines();
        _sortEnginesByDefaults();
        _createAndAddEngine();
        _removeObservers();
        observe();
        _makeEngineFromConfig();
        _showRemovalOfSearchEngineNotificationBox();
    }
}