declare module "resource://app/modules/UrlbarEventBufferer.sys.mjs" {
    export class UrlbarEventBufferer {
        constructor(input);
        onQueryStarted();
        onQueryCancelled();
        onQueryFinished();
        onQueryResults();
        handleEvent();
        maybeDeferEvent();
        deferEvent();
        replayDeferredEvents();
        shouldDeferEvent();
        get isDeferringEvents();
        get waitingDeferUserSelectionProviders();
        isSafeToPlayDeferredEvent();
        get lastResultIsSelected();
    }
}