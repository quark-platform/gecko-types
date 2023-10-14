declare module "resource://app/modules/FeatureCallout.sys.mjs" {
    export class FeatureCallout {
        constructor();
        setupFeatureTourProgress();
        teardownFeatureTourProgress();
        get featureTourProgress();
        get _loadPageEventManager();
        _addPositionListeners();
        _removePositionListeners();
        _handlePrefChange();
        _maybeAdvanceScreens();
        handleEvent();
        _addCalloutLinkElements();
        _getAnchor();
        _createContainer();
        _positionCallout();
        _setupWindowFunctions();
        _clearWindowFunctions();
        _emitEvent();
        endTour();
        _dismiss();
        _addScriptsAndRender();
        _observeRender();
        _updateConfig();
        _loadConfig();
        _renderCallout();
        _attachPageEventListeners();
        _handlePageEventAction();
        _getUniqueElementIdentifier();
        getInitialFocus();
        showFeatureCallout();
        _initTheme();
        _applyTheme();
        _setThemeVariable();
    }
}