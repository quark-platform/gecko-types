declare module "resource://gre/modules/PlacesFrecencyRecalculator.sys.mjs" {
    export class PlacesFrecencyRecalculator {
        constructor();
        recalculateSomeFrecencies();
        recalculateAnyOutdatedFrecencies();
        get isRecalculationPending();
        maybeStartFrecencyRecalculation();
        decay();
        observe();
    }
}