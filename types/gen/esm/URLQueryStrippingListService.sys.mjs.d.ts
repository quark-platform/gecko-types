declare module "resource://gre/modules/URLQueryStrippingListService.sys.mjs" {export class URLQueryStrippingListService {
    classId: unknown;
    QueryInterface: MozQueryInterface;
    observers: Set<any>;
    stripOnShareObservers: Set<any>;
    stripOnShareParams: any;
    prefStripList: Set<any>;
    prefAllowList: Set<any>;
    remoteStripList: Set<any>;
    remoteAllowList: Set<any>;
    isParentProcess: boolean;
    testSetList(testList: any): Promise<void>;
    testHasStripOnShareObservers(): boolean;
    testHasQPSObservers(): boolean;
    get hasObservers(): boolean;
    _onRemoteSettingsUpdate(entries: any): void;
    _onPrefUpdate(pref: any, value: any): void;
    _getListFromSharedData(): any[];
    _notifyObservers(observer: any): void;
    _notifyStripOnShareObservers(observer: any): Promise<void>;
    registerAndRunObserver(observer: any): Promise<void>;
    registerAndRunObserverStripOnShare(observer: any): Promise<void>;
    unregisterObserver(observer: any): Promise<void>;
    unregisterStripOnShareObserver(observer: any): Promise<void>;
    clearLists(): Promise<void>;
    observe(subject: any, topic: any, data: any): void;
    handleEvent(event: any): void;
    testWaitForInit(): Promise<boolean>;
    #private;
}
}