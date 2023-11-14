declare module "resource://app/modules/UrlbarProviderExtension.sys.mjs" {
    import type { UrlbarProvider } from "resource://app/modules/UrlbarUtils.sys.mjs";
    export class UrlbarProviderExtension extends UrlbarProvider {
        getOrCreate(name?);
        constructor(name);
        get name();
        get type();
        isActive(context?);
        getPriority(context?);
        setEventListener(eventName?, listener?);
        updateBehavior(context?);
        getViewUpdate(result?, idsByName?);
        startQuery(context?, addCallback?);
        cancelQuery(context?);
        onEngagement(state?, queryContext?, details?, controller?);
        _notifyListener(eventName?);
        _makeUrlbarResult(context?, extResult?);
    }
}