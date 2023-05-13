declare module "resource://app/modules/UrlbarProviderExtension.sys.mjs" {
    export class UrlbarProviderExtension {
        getOrCreate();
        constructor(name);
        get name();
        get type();
        isActive();
        getPriority();
        setEventListener();
        updateBehavior();
        getViewUpdate();
        startQuery();
        cancelQuery();
        pickResult();
        onEngagement();
        _notifyListener();
        _makeUrlbarResult();
    }
}