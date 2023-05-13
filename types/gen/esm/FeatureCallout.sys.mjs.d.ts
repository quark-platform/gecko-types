declare module "resource://app/modules/FeatureCallout.sys.mjs" {
    export class FeatureCallout {
        constructor();
        _addPositionListeners();
        _removePositionListeners();
        _handlePrefChange();
        handleEvent();
        _addCalloutLinkElements();
        _createContainer();
        _positionCallout();
        _setupWindowFunctions();
        _clearWindowFunctions();
        endTour();
        _dismiss();
        _addScriptsAndRender();
        _observeRender();
        _loadConfig();
        _renderCallout();
        _attachPageEventListeners();
        _handlePageEventAction();
        _getUniqueElementIdentifier();
        showFeatureCallout();
    }
}