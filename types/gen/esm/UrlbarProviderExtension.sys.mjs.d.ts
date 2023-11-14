declare module "resource://app/modules/UrlbarProviderExtension.sys.mjs" {
    import type { UrlbarProvider } from "resource://app/modules/UrlbarUtils.sys.mjs";
    export class UrlbarProviderExtension extends UrlbarProvider {
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
        onEngagement();
        _notifyListener();
        _makeUrlbarResult();
    }
}