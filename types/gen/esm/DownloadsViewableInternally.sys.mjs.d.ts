declare module "resource://app/modules/DownloadsViewableInternally.sys.mjs" {
    var PREF_ENABLED_TYPES;
    var PREF_BRANCH_WAS_REGISTERED;
    var PREF_BRANCH_PREVIOUS_ACTION;
    var PREF_BRANCH_PREVIOUS_ASK;
    var DownloadsViewableInternally: {
        register();
        _downloadTypesViewableInternally;
        _shouldViewDownloadInternally(aMimeType, aExtension);
        _makeFakeHandler(aMimeType, aExtension);
        _saveSettings(handlerInfo, handlerType);
        _restoreSettings(handlerInfo, handlerType);
        _clearSavedSettings(extension);
        _updateAllHandlers();
        _updateHandler(handlerType);
        _becomeHandler(handlerType);
        _unbecomeHandler(handlerType);
    };
}