declare module "resource://app/modules/UrlbarEventBufferer.sys.mjs" {
    export class UrlbarEventBufferer {
        constructor(input);
        onQueryStarted(queryContext?);
        onQueryCancelled(queryContext?);
        onQueryFinished(queryContext?);
        onQueryResults(queryContext?);
        handleEvent(event?);
        maybeDeferEvent(event?, callback?);
        deferEvent(event?, callback?);
        replayDeferredEvents(onlyIfSafe?);
        shouldDeferEvent(event?);
        get isDeferringEvents();
        get waitingDeferUserSelectionProviders();
        isSafeToPlayDeferredEvent(event?);
        get lastResultIsSelected();
    }
}