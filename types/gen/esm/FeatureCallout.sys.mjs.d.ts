declare module "resource://app/modules/FeatureCallout.sys.mjs" {
    export class FeatureCallout {
        constructor(param0);
        setupFeatureTourProgress();
        teardownFeatureTourProgress();
        get featureTourProgress();
        get _loadPageEventManager();
        _addPositionListeners();
        _removePositionListeners();
        _addPanelConflictListeners();
        _removePanelConflictListeners();
        onViewOpen();
        _handlePrefChange(subject?, topic?, prefName?);
        _maybeAdvanceScreens();
        handleEvent(event?);
        _addCalloutLinkElements();
        _getAnchor();
        _getPanelPositionString(panelPosition?);
        _setPanelMethods(panel?);
        _createContainer();
        _positionCallout();
        _setupWindowFunctions();
        _clearWindowFunctions();
        _emitEvent(name?, data?);
        endTour(param0?);
        _dismiss();
        _addScriptsAndRender();
        _observeRender(container?);
        _updateConfig(message?);
        _loadConfig();
        _renderCallout();
        _attachPageEventListeners(listeners?);
        _handlePageEventAction(action?, event?);
        _getUniqueElementIdentifier(target?);
        getInitialFocus();
        showFeatureCallout(message?);
        _initTheme(theme?);
        _applyTheme();
        _setThemeVariable(name?, value?);
    }
}