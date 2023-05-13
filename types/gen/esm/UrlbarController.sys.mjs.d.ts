declare module "resource://app/modules/UrlbarController.sys.mjs" {
    export class UrlbarController {
        constructor();
        get NOTIFICATIONS();
        setView();
        startQuery();
        cancelQuery();
        receiveResults();
        addQueryListener();
        removeQueryListener();
        keyEventMovesCaret();
        handleKeyNavigation();
        speculativeConnect();
        set userSelectionBehavior(behavior);
        recordSelectedResult();
        handleDeleteEntry();
        clearLastQueryContextCache();
        notify();
    }
}