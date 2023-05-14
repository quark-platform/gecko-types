declare module "resource://gre/modules/URLQueryStrippingListService.sys.mjs" {
    export class URLQueryStrippingListService {
        constructor();
        _onRemoteSettingsUpdate();
        _onPrefUpdate();
        _getListFromSharedData();
        _notifyObservers();
        registerAndRunObserver();
        unregisterObserver();
        clearLists();
        observe();
        handleEvent();
        testWaitForInit();
    }
}