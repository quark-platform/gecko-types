declare module "resource://app/modules/UrlbarController.sys.mjs" {
    export class UrlbarController {
        constructor(param0);
        get NOTIFICATIONS();
        setView(view?);
        startQuery(queryContext?);
        cancelQuery();
        receiveResults(queryContext?);
        addQueryListener(listener?);
        removeQueryListener(listener?);
        keyEventMovesCaret(event?);
        handleKeyNavigation(event?, param1?);
        speculativeConnect(result?, context?, reason?);
        set userSelectionBehavior(behavior);
        recordSelectedResult(event?, result?);
        removeResult(result?);
        clearLastQueryContextCache();
        notify(name?, param1?);
    }
}