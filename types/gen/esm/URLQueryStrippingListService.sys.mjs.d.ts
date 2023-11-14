declare module "resource://gre/modules/URLQueryStrippingListService.sys.mjs" {
    export class URLQueryStrippingListService {
        constructor();
        get hasObservers();
        _onRemoteSettingsUpdate(entries?);
        _onPrefUpdate(pref?, value?);
        _getListFromSharedData();
        _notifyObservers(observer?);
        _notifyStripOnShareObservers(observer?);
        registerAndRunObserver(observer?);
        registerAndRunObserverStripOnShare(observer?);
        unregisterObserver(observer?);
        unregisterStripOnShareObserver(observer?);
        clearLists();
        observe(subject?, topic?, data?);
        handleEvent(event?);
        testWaitForInit();
    }
}