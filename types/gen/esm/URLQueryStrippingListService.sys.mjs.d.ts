declare module "resource://gre/modules/URLQueryStrippingListService.sys.mjs" {
    export class URLQueryStrippingListService {
        constructor();
        get hasObservers();
        _onRemoteSettingsUpdate();
        _onPrefUpdate();
        _getListFromSharedData();
        _notifyObservers();
        _notifyStripOnShareObservers();
        registerAndRunObserver();
        registerAndRunObserverStripOnShare();
        unregisterObserver();
        unregisterStripOnShareObserver();
        clearLists();
        observe();
        handleEvent();
        testWaitForInit();
    }
}